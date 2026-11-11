import { USER_AGENT } from "@/lib/archive/sources";

export async function archiveFetch(
  url: string,
  init: RequestInit = {},
): Promise<Response> {
  const headers = new Headers(init.headers);
  if (!headers.has("User-Agent")) headers.set("User-Agent", USER_AGENT);
  if (!headers.has("Accept")) headers.set("Accept", "application/json");
  return fetch(url, {
    ...init,
    headers,
    next: { revalidate: 0 },
  });
}

export async function archiveJson<T>(url: string): Promise<T> {
  const res = await archiveFetch(url);
  if (!res.ok) {
    throw new Error(`${url} → ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}
