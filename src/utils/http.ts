export default async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

export async function post<T>(
  path: string,
  body: Record<string, unknown>,
  args: RequestInit = {}
): Promise<T> {
  return await http<T>(
    new Request(path, { method: "post", body: JSON.stringify(body), ...args })
  );
}
