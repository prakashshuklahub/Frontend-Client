const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://media-service-9v3w.onrender.com/api";

export async function get<T>(endpoint: string): Promise<T> {
  const url = BASE_URL + endpoint;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}

const httpClient = { get };

export default httpClient;
