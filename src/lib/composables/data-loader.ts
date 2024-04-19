const API_URL = import.meta.env.VITE_API_URL;

export async function fetchData(path: URL | string) {
  return await fetch(`${API_URL}/${path}`);
}

export async function fetchJSONData(path: URL | string) {
  return await (await fetch(`${API_URL}/${path}`)).json();
}
