import type { AnimalGroup } from "@/lib/map/types";

/** Proxied URL so the browser can load Wikimedia / iNaturalist / GBIF images reliably. */
export function proxiedImageUrl(remoteUrl: string): string {
  if (!remoteUrl) return remoteUrl;
  if (remoteUrl.startsWith("/api/map/image-proxy")) return remoteUrl;
  if (remoteUrl.startsWith("data:") || remoteUrl.startsWith("/")) return remoteUrl;
  return `/api/map/image-proxy?url=${encodeURIComponent(remoteUrl)}`;
}

/**
 * Honest defaults when we only know the broad group/class.
 * Never invent camels/elephants for unknown mammals — that mismatches the card.
 */
const GROUP_DEFAULT: Record<AnimalGroup, string> = {
  mammals: "🐭",
  birds: "🐦",
  reptiles: "🦎",
  amphibians: "🐸",
  fish: "🐟",
  insects: "🪲",
  other: "🐾",
};

const CLASS_DEFAULT: { re: RegExp; emoji: string }[] = [
  { re: /^mammalia$/i, emoji: "🐭" },
  { re: /^aves$/i, emoji: "🐦" },
  { re: /^reptilia$/i, emoji: "🦎" },
  { re: /^amphibia$/i, emoji: "🐸" },
  { re: /^insecta$/i, emoji: "🪲" },
  { re: /^arachnida$/i, emoji: "🕷️" },
  { re: /^gastropoda$/i, emoji: "🐚" },
  { re: /^bivalvia$|^polyplacophora$|^scaphopoda$/i, emoji: "🐚" },
  { re: /^cephalopoda$/i, emoji: "🐙" },
  { re: /^malacostraca$|^maxillopoda$|^branchiopoda$|^ostracoda$|^copepoda$/i, emoji: "🦀" },
  { re: /^elasmobranchii$|^chondrichthyes$|^holocephali$/i, emoji: "🦈" },
  { re: /^actinopterygii$|^teleostei$|^sarcopterygii$|^petromyzonti$|^myxini$/i, emoji: "🐟" },
  { re: /^anthozoa$|^octocorallia$|^hexacorallia$/i, emoji: "🪸" },
  { re: /^hydrozoa$|^scyphozoa$|^cubozoa$/i, emoji: "🪼" },
  { re: /^demospongiae$|^calcarea$|^hexactinellida$|^homoscleromorpha$/i, emoji: "🪸" },
  { re: /^asteroidea$|^ophiuroidea$|^crinoidea$/i, emoji: "⭐" },
  { re: /^echinoidea$/i, emoji: "🐚" },
  { re: /^holothuroidea$/i, emoji: "🪼" },
  { re: /^ascidiacea$|^thaliacea$|^appendicularia$/i, emoji: "🪸" },
  { re: /^polychaeta$/i, emoji: "🪱" },
];

/**
 * Name / genus → emoji. Specific matches only — first hit wins.
 * Keep megafauna here so they never leak onto unrelated species via hashing.
 */
const TAXON_EMOJI: { re: RegExp; emoji: string }[] = [
  // Marine mammals before land lookalikes (“sea lion” ≠ 🦁, “elephant seal” ≠ 🐘)
  { re: /\b(phoca|halichoerus|mirounga|zalophus|otaria|arctocephalus|neophoca|phocarctos|sea\s*lion|fur\s*seal|elephant\s*seal|seal)\b/i, emoji: "🦭" },
  { re: /\b(dugong|trichechus|manatee|sirenia)\b/i, emoji: "🦭" },
  { re: /\b(enhydra|sea\s*otter)\b/i, emoji: "🦦" },
  { re: /\b(balaenoptera|megaptera|physeter|balaena|eubalaena|whale)\b/i, emoji: "🐋" },
  { re: /\b(tursiops|delphinus|orcinus|stenella|lagenorhynchus|dolphin|porpoise|phocoena)\b/i, emoji: "🐬" },

  // Cats / canids / bears
  { re: /\b(panthera leo)\b/i, emoji: "🦁" },
  { re: /\blion(?!\s*fish)\b/i, emoji: "🦁" },
  { re: /\b(panthera tigris|tiger)\b/i, emoji: "🐯" },
  { re: /\b(panthera onca|jaguar)\b/i, emoji: "🐆" },
  { re: /\b(panthera pardus|leopard)\b/i, emoji: "🐆" },
  { re: /\b(acinonyx|cheetah)\b/i, emoji: "🐆" },
  { re: /\b(felis|puma|lynx|leopardus|cat)\b/i, emoji: "🐱" },
  { re: /\b(ailuropoda|panda)\b/i, emoji: "🐼" },
  { re: /\b(ursus maritimus|polar bear)\b/i, emoji: "🐻‍❄️" },
  { re: /\b(ursus|helarctos|melursus|tremarctos|bear)\b/i, emoji: "🐻" },
  { re: /\b(canis lupus|wolf)\b/i, emoji: "🐺" },
  { re: /\b(canis|lycaon|cuon|dog)\b/i, emoji: "🐶" },
  { re: /\b(vulpes|alopex|fox)\b/i, emoji: "🦊" },
  { re: /\b(meles|taxidea|mellivora|badger)\b/i, emoji: "🦡" },
  { re: /\b(lutra|lontra|enhydra|pteronura|otter)\b/i, emoji: "🦦" },
  { re: /\b(mephitis|spilogale|skunk)\b/i, emoji: "🦨" },
  { re: /\b(bradypus|choloepus|sloth)\b/i, emoji: "🦥" },

  // Ungulates / megafauna — only when the name actually matches
  { re: /\b(elephas|loxodonta|elephant)\b/i, emoji: "🐘" },
  { re: /\b(giraffa|giraffe)\b/i, emoji: "🦒" },
  // Chalicotheres & other extinct clawed ungulates — NOT horses
  {
    re: /\b(ancylotherium|chalicotherium|chalicotheri|moropus|tylocephalonyx)\b/i,
    emoji: "🦣",
  },
  { re: /\b(tapirus|tapir)\b/i, emoji: "🐗" },
  { re: /\b(equus quagga|equus zebra|zebra)\b/i, emoji: "🦓" },
  { re: /\b(equus|horse|donkey|ass )\b/i, emoji: "🐴" },
  { re: /\b(camelus|camel|dromedar)\b/i, emoji: "🐪" },
  { re: /\b(hippopotamus|hippo)\b/i, emoji: "🦛" },
  { re: /\b(diceros|ceratotherium|rhinoceros|rhino)\b/i, emoji: "🦏" },
  { re: /\b(bison|bos |bubalus|syncerus|cattle|buffalo)\b/i, emoji: "🦬" },
  { re: /\b(capra|oreamnos|goat|ibex)\b/i, emoji: "🐐" },
  { re: /\b(ovis |sheep|mouflon)\b/i, emoji: "🐑" },
  { re: /\b(cervus|odocoileus|alces|rangifer|capreolus|deer|moose|elk|caribou)\b/i, emoji: "🦌" },
  { re: /\b(sus |pecari|phacochoerus|babyrousa|warthog|boar|pig)\b/i, emoji: "🐗" },
  { re: /\b(macropus|osophantar|wallaby|kangaroo)\b/i, emoji: "🦘" },

  // Primates
  { re: /\b(gorilla|pan troglodytes|pan paniscus|pongo|chimp|orangutan)\b/i, emoji: "🦍" },
  { re: /\b(macaca|papio|mandrillus|cercopithecus|lemur|hapalemur|eulemur|monkey|ape|primate)\b/i, emoji: "🐒" },

  // Bats
  { re: /\b(pteropus|acerodon|myotis|pipistrellus|rhinolophus|desmodus|bat|chiroptera)\b/i, emoji: "🦇" },

  // Rodents / small mammals (jerboas, mice, rats, squirrels…)
  { re: /\b(allactaga|scarturus|jaculus|dipus|pygeretmus|jerboa)\b/i, emoji: "🐭" },
  { re: /\b(mus|rattus|apodemus|acomys|micromys|lemniscomys|mouse|rat|muridae)\b/i, emoji: "🐭" },
  { re: /\b(castor|beaver)\b/i, emoji: "🦫" },
  { re: /\b(sciurus|tamias|spermophilus|marmota|squirrel|chipmunk|marmot)\b/i, emoji: "🐿️" },
  { re: /\b(erinaceus|atelerix|hedgehog)\b/i, emoji: "🦔" },
  { re: /\b(oryctolagus|lepus|sylvilagus|rabbit|hare|bunny)\b/i, emoji: "🐇" },
  { re: /\b(cavia|hydrochoerus|guinea pig|capybara)\b/i, emoji: "🐭" },
  // Common rodent genus endings in binomials
  { re: /\b[a-z]+(mys|omys|otomys|oxodon|exodon)\b/i, emoji: "🐭" },

  // Reptiles (incl. sea turtles)
  { re: /\b(chelonia|caretta|eretmochelys|lepidochelys|natator|dermochelys|sea turtle)\b/i, emoji: "🐢" },
  { re: /\b(testudo|geochelone|turtle|tortoise|terrapin)\b/i, emoji: "🐢" },
  { re: /\b(crocodylus|alligator|caiman|gavialis|crocodile|crocodyl)\b/i, emoji: "🐊" },
  { re: /\b(naja|python|viper|boa |serpentes|coluber|natrix|anilios|typhlops|snake|serpent)\b/i, emoji: "🐍" },
  { re: /\b(varanus|iguana|gecko|lacerta|anolis|scincus|lizard|skink)\b/i, emoji: "🦎" },

  // Amphibians
  { re: /\b(rana|bufo|hyla|lithobates|dendrobates|frog|toad|treefrog)\b/i, emoji: "🐸" },
  { re: /\b(salamandra|triturus|ambystoma|newt|salamander)\b/i, emoji: "🦎" },

  // Fish / sharks / rays — BEFORE birds so "eagle ray" never becomes 🦅
  { re: /\b(carcharodon|galeocerdo|squalus|prionace|carcharhinus|shark)\b/i, emoji: "🦈" },
  {
    re: /\b(aetomylaeus|aetobatus|myliobatis|rhinoptera|manta|mobula|raja|dasyatis|urobatis|gymnura|eagle\s*ray|stingray|devil\s*ray|manta\s*ray|skate)\b/i,
    emoji: "🦈",
  },
  { re: /\b(tetraodon|diodon|arothron|puffer)\b/i, emoji: "🐡" },
  { re: /\b(alosa|clupea|sardina|sardinella|shad|herring|sardine|anchovy|engraulis)\b/i, emoji: "🐟" },
  { re: /\b(hippocampus|seahorse)\b/i, emoji: "🐟" },
  { re: /\b(muraena|gymnothorax|eel)\b/i, emoji: "🐟" },
  { re: /\b(clownfish|amphiprion|nemo)\b/i, emoji: "🐠" },

  // Birds (eagle must not match “eagle ray”)
  { re: /\b(aquila|haliaeetus|accipiter|buteo|hawk|falcon|falco)\b/i, emoji: "🦅" },
  { re: /\beagle(?!\s*ray)\b/i, emoji: "🦅" },
  { re: /\b(strix|bubo|tyto|athene|owl)\b/i, emoji: "🦉" },
  { re: /\b(spheniscus|aptenodytes|pygoscelis|penguin)\b/i, emoji: "🐧" },
  { re: /\b(phoenicopterus|flamingo)\b/i, emoji: "🦩" },
  { re: /\b(ara |psittac|amazona|cockatoo|macaw|parrot)\b/i, emoji: "🦜" },
  { re: /\b(pavo|peacock|peafowl)\b/i, emoji: "🦚" },
  { re: /\b(cygnus|swan)\b/i, emoji: "🦢" },
  { re: /\b(anser|branta|goose)\b/i, emoji: "🪿" },
  { re: /\b(anas |duck|mallard)\b/i, emoji: "🦆" },
  { re: /\b(columba|streptopelia|dove|pigeon)\b/i, emoji: "🕊️" },
  { re: /\b(gallus|chicken|rooster|hen)\b/i, emoji: "🐔" },
  { re: /\b(meleagris|turkey)\b/i, emoji: "🦃" },
  { re: /\b(corvus|crow|raven)\b/i, emoji: "🐦‍⬛" },

  // Cephalopods / crustaceans / cnidarians / echinoderms
  { re: /\b(octopus|enteroctopus|enteroctopus|squid|sepia|loligo|architeuthis|nautilus)\b/i, emoji: "🐙" },
  { re: /\b(cancer |callinectes|carcinus|crab)\b/i, emoji: "🦀" },
  { re: /\b(homarus|nephrops|panulirus|lobster)\b/i, emoji: "🦞" },
  { re: /\b(penaeus|litopenaeus|shrimp|prawn)\b/i, emoji: "🦐" },
  { re: /\b(aurelia|chrysaora|cyanea|jellyfish|medusa)\b/i, emoji: "🪼" },
  { re: /\b(acropora|porites|coral|anthozoa)\b/i, emoji: "🪸" },
  { re: /\b(asterias|pisaster|starfish|sea star|asteroidea)\b/i, emoji: "⭐" },
  { re: /\b(strongylocentrotus|echinus|sea urchin|echinoidea)\b/i, emoji: "🐚" },
  { re: /\b(holothuria|sea cucumber)\b/i, emoji: "🪼" },
  { re: /\b(tridacna|oyster|mussel|clam|bivalve)\b/i, emoji: "🐚" },

  // Insects / arthropods
  { re: /\b(papilio|danaus|morpho|butterfly|lepidoptera)\b/i, emoji: "🦋" },
  { re: /\b(apis |bombus|bee|honeybee)\b/i, emoji: "🐝" },
  { re: /\b(formica|camponotus|ant)\b/i, emoji: "🐜" },
  { re: /\b(coccinella|ladybird|ladybug)\b/i, emoji: "🐞" },
  { re: /\b(scarabaeus|lucanus|beetle|coleoptera)\b/i, emoji: "🪲" },
  { re: /\b(gryllus|cricket)\b/i, emoji: "🦗" },
  { re: /\b(musca|drosophila|fly)\b/i, emoji: "🪰" },
  { re: /\b(aedes|anopheles|culex|mosquito)\b/i, emoji: "🦟" },
  { re: /\b(latrodectus|araneus|spider|araneae)\b/i, emoji: "🕷️" },
  { re: /\b(scorpiones|scorpion)\b/i, emoji: "🦂" },
  { re: /\b(helix |cornu |snail|slug|gastropod)\b/i, emoji: "🐌" },
  { re: /\b(lumbricus|earthworm|worm)\b/i, emoji: "🪱" },
];

/** Order / higher-rank hints when present in taxonomy fields. */
const ORDER_EMOJI: { re: RegExp; emoji: string }[] = [
  { re: /\b(rodentia)\b/i, emoji: "🐭" },
  { re: /\b(chiroptera)\b/i, emoji: "🦇" },
  { re: /\b(primates)\b/i, emoji: "🐒" },
  { re: /\b(carnivora)\b/i, emoji: "🦊" },
  { re: /\b(artiodactyla)\b/i, emoji: "🦌" },
  // Perissodactyla includes horses, rhinos, tapirs, AND extinct chalicotheres —
  // never default the whole order to 🐴 (that made Ancylotherium a "horse").
  { re: /\b(equidae)\b/i, emoji: "🐴" },
  { re: /\b(rhinocerotidae)\b/i, emoji: "🦏" },
  { re: /\b(tapiridae)\b/i, emoji: "🐗" },
  { re: /\b(chalicotheriidae)\b/i, emoji: "🦣" },
  { re: /\b(cetacea|cetartiodactyla)\b/i, emoji: "🐋" },
  { re: /\b(pinnipedia)\b/i, emoji: "🦭" },
  { re: /\b(lagomorpha)\b/i, emoji: "🐇" },
  { re: /\b(eulipotyphla|insectivora)\b/i, emoji: "🦔" },
  { re: /\b(proboscidea)\b/i, emoji: "🐘" },
  { re: /\b(sirenia)\b/i, emoji: "🦭" },
  { re: /\b(decapoda)\b/i, emoji: "🦀" },
  { re: /\b(octopoda|teuthida|sepida)\b/i, emoji: "🐙" },
  { re: /\b(scleractinia)\b/i, emoji: "🪸" },
  { re: /\b(perciformes|tetraodontiformes|cypriniformes)\b/i, emoji: "🐟" },
  { re: /\b(lamniformes|carcharhiniformes|rajiformes|myliobatiformes)\b/i, emoji: "🦈" },
  { re: /\b(passeriformes)\b/i, emoji: "🐦" },
  { re: /\b(accipitriformes|falconiformes)\b/i, emoji: "🦅" },
  { re: /\b(strigiformes)\b/i, emoji: "🦉" },
  { re: /\b(anseriformes)\b/i, emoji: "🦆" },
  { re: /\b(psittaciformes)\b/i, emoji: "🦜" },
  { re: /\b(sphenisciformes)\b/i, emoji: "🐧" },
  { re: /\b(serpentes)\b/i, emoji: "🐍" },
  { re: /\b(testudines)\b/i, emoji: "🐢" },
  { re: /\b(crocodylia|crocodilia)\b/i, emoji: "🐊" },
  { re: /\b(squamata)\b/i, emoji: "🦎" },
  { re: /\b(anura)\b/i, emoji: "🐸" },
  { re: /\b(coleoptera)\b/i, emoji: "🪲" },
  { re: /\b(lepidoptera)\b/i, emoji: "🦋" },
  { re: /\b(hymenoptera)\b/i, emoji: "🐝" },
  { re: /\b(diptera)\b/i, emoji: "🪰" },
  { re: /\b(araneae)\b/i, emoji: "🕷️" },
];

export function animalEmoji(options: {
  scientificName?: string | null;
  commonName?: string | null;
  group?: AnimalGroup | string | null;
  className?: string | null;
  phylum?: string | null;
  order?: string | null;
}): string {
  const scientific = (options.scientificName || "").trim();
  const common = (options.commonName || "").trim();
  // Prefer common name for matching when it differs from the binomial
  const haystack = [common, scientific]
    .filter(Boolean)
    .filter((v, i, arr) => arr.findIndex((x) => x.toLowerCase() === v.toLowerCase()) === i)
    .join(" ")
    .trim();

  const className = (options.className || "").trim();
  const order = (options.order || "").trim();
  const phylum = (options.phylum || "").trim();
  const taxonomy = `${phylum} ${className} ${order}`.trim();

  // Class/order first for cartilaginous fish — common names like "eagle ray" must not win
  if (/^(elasmobranchii|chondrichthyes|holocephali)$/i.test(className)) {
    return "🦈";
  }
  if (/\b(myliobatiformes|rajiformes|lamniformes|carcharhiniformes)\b/i.test(taxonomy)) {
    return "🦈";
  }

  if (haystack) {
    for (const row of TAXON_EMOJI) {
      if (row.re.test(haystack)) return row.emoji;
    }
  }

  if (taxonomy) {
    for (const row of ORDER_EMOJI) {
      if (row.re.test(taxonomy)) return row.emoji;
    }
  }

  if (className) {
    for (const row of CLASS_DEFAULT) {
      if (row.re.test(className)) return row.emoji;
    }
  }

  // Phylum-level marine fallbacks when class is missing/odd
  if (/^cnidaria$/i.test(phylum)) return "🪸";
  if (/^ctenophora$/i.test(phylum)) return "🪼";
  if (/^echinodermata$/i.test(phylum)) return "⭐";
  if (/^porifera$/i.test(phylum)) return "🪸";
  if (/^mollusca$/i.test(phylum)) return "🐚";

  const group = (options.group || "other") as AnimalGroup;
  return GROUP_DEFAULT[group] || GROUP_DEFAULT.other;
}

/** Reuse canvas data-URLs so Cesium entity rebuilds stay cheap. */
const emojiIconCache = new Map<string, string>();
const EMOJI_ICON_CACHE_MAX = 400;

/**
 * Draw an emoji onto a soft circular badge for Cesium billboards.
 * Browser-only.
 */
export function renderEmojiMarkerIcon(options: {
  emoji: string;
  borderColor?: string;
  size?: number;
}): string {
  const size = options.size ?? 72;
  const border = options.borderColor || "rgba(255,255,255,0.55)";
  const cacheKey = `${options.emoji}|${border}|${size}`;
  const cached = emojiIconCache.get(cacheKey);
  if (cached) return cached;

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 1;

  const grad = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r);
  grad.addColorStop(0, "rgba(18, 28, 38, 0.92)");
  grad.addColorStop(1, "rgba(8, 14, 22, 0.88)");
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.lineWidth = 2.5;
  ctx.strokeStyle = border;
  ctx.stroke();

  const fontSize = Math.floor(size * 0.58);
  ctx.font = `${fontSize}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(options.emoji, cx, cy + size * 0.04);

  const url = canvas.toDataURL("image/png");
  if (emojiIconCache.size >= EMOJI_ICON_CACHE_MAX) {
    const first = emojiIconCache.keys().next().value;
    if (first) emojiIconCache.delete(first);
  }
  emojiIconCache.set(cacheKey, url);
  return url;
}

export function buildEmojiMarkerIcon(options: {
  scientificName?: string | null;
  commonName?: string | null;
  group: AnimalGroup;
  className?: string | null;
  phylum?: string | null;
  borderColor?: string;
  size?: number;
}): string {
  const emoji = animalEmoji(options);
  return renderEmojiMarkerIcon({
    emoji,
    borderColor: options.borderColor,
    size: options.size,
  });
}

/** @deprecated Prefer animalEmoji / buildEmojiMarkerIcon */
export function groupIconPath(group: AnimalGroup | string | undefined): string {
  const emoji = animalEmoji({ group });
  if (typeof document === "undefined") {
    return `/icons/animals/${(group || "other").toString()}.svg`;
  }
  return renderEmojiMarkerIcon({ emoji, size: 72 });
}
