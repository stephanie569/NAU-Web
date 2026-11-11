import { getMapSpeciesRecord } from "@/lib/archive/mapSpecies";
import { resolveCommonName } from "@/lib/map/commonName";
import { animalEmoji, proxiedImageUrl } from "@/lib/map/animalIcons";
import { resolveSpeciesPhoto } from "@/lib/map/animalPhoto";
import { getAnimalCard } from "@/lib/wildlife/cards";
import type { AnimalCardPayload, AnimalCardPhoto } from "@/lib/wildlife/types";

/** Same-origin image URL so the browser is not blocked by Wikimedia hotlink rules. */
function forBrowser(photo: AnimalCardPhoto | null): AnimalCardPhoto | null {
  if (!photo?.url) return null;
  return {
    ...photo,
    url: proxiedImageUrl(photo.url),
  };
}

/**
 * Build a map animal card for any pin: wildlife curated species or archive GBIF pin.
 */
export async function buildAnimalCardForStoryId(
  storyId: string,
): Promise<AnimalCardPayload | null> {
  if (storyId.startsWith("wildlife:")) {
    const speciesId = storyId.slice("wildlife:".length);
    const base = getAnimalCard(speciesId);
    if (!base) return null;
    const photo = forBrowser(
      await resolveSpeciesPhoto({
        scientificName: base.scientificName,
        commonName: base.commonName,
        preferFieldPhotos: true,
      }),
    );
    return {
      ...base,
      photo,
      emoji:
        base.emoji ||
        animalEmoji({
          scientificName: base.scientificName,
          commonName: base.commonName,
          group: base.animalGroup,
          className: base.taxonomy?.className,
          phylum: base.taxonomy?.phylum,
        }),
    };
  }

  if (storyId.startsWith("archive-")) {
    const id = storyId.slice("archive-".length);
    const rec = await getMapSpeciesRecord(id);
    if (!rec) return null;

    const marinePhyla = new Set([
      "cnidaria",
      "ctenophora",
      "echinodermata",
      "porifera",
      "mollusca",
    ]);
    const marineClasses = /teleostei|actinopterygii|chondrichthyes|elasmobranchii|cephalopoda|anthozoa|hydrozoa|malacostraca|bivalvia|gastropoda|echinoidea|asteroidea|holothuroidea|demospongiae|polychaeta|ascidiacea/i;
    const isMarine =
      Boolean(rec.worms) ||
      marinePhyla.has((rec.phylum || "").toLowerCase()) ||
      marineClasses.test(rec.class || "") ||
      rec.group === "fish";

    const gbifKey =
      rec.gbif || (/^\d+$/.test(String(rec.id)) ? String(rec.id) : null);

    const [photoRaw, resolvedCommon] = await Promise.all([
      resolveSpeciesPhoto({
        scientificName: rec.name,
        commonName: rec.commonName || null,
        gbifKey,
        wormsId: rec.worms || null,
        preferFieldPhotos: isMarine,
      }),
      rec.commonName
        ? Promise.resolve(rec.commonName)
        : resolveCommonName({
            scientificName: rec.name,
            gbifKey,
          }),
    ]);
    const photo = forBrowser(photoRaw);
    const displayCommon = resolvedCommon || rec.name;

    const sourceLinks: { label: string; url: string }[] = [];
    if (rec.gbif) {
      sourceLinks.push({
        label: "GBIF",
        url: `https://www.gbif.org/species/${rec.gbif}`,
      });
    } else if (/^\d+$/.test(String(rec.id))) {
      sourceLinks.push({
        label: "GBIF",
        url: `https://www.gbif.org/species/${rec.id}`,
      });
    }
    if (rec.col) {
      sourceLinks.push({
        label: "Catalogue of Life",
        url: `https://www.catalogueoflife.org/data/taxon/${rec.col}`,
      });
    }
    if (rec.worms) {
      sourceLinks.push({
        label: "WoRMS",
        url: `https://www.marinespecies.org/aphia.php?p=taxdetails&id=${rec.worms}`,
      });
    }

    return {
      speciesId: String(rec.id),
      scientificName: rec.name,
      commonName: displayCommon,
      emoji: animalEmoji({
        scientificName: rec.name,
        commonName: displayCommon,
        group: rec.group,
        className: rec.class,
        phylum: rec.phylum,
        order: (rec as { order?: string }).order,
      }),
      isDemo: false,
      regionName: rec.regionName,
      animalGroup: rec.group,
      taxonomy: {
        phylum: rec.phylum || null,
        className: rec.class || null,
      },
      sourceLinks,
      photo,
      assessment: {
        statusLabel: "Assessment unavailable",
        category: null,
        scope: null,
        assessmentDate: null,
        publicationDate: null,
        populationTrend: null,
        sourceUrl: sourceLinks[0]?.url || null,
        lastSuccessfulCheck: null,
        stale: false,
        unavailable: true,
        explicitlyNotAssessed: false,
        provider: null,
      },
      latestEvent: null,
      eventHistory: [],
    };
  }

  return null;
}
