const BASE = import.meta.env.VITE_API_BASE || ''

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

async function request<T>(path: string, method: HttpMethod = 'GET', body?: unknown): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const msg = await res.text()
    throw new Error(`Erro ${res.status}: ${msg}`)
  }
  return res.json() as Promise<T>
}

export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body: unknown) => request<T>(path, 'POST', body),
  put:  <T>(path: string, body: unknown) => request<T>(path, 'PUT', body),
  del:  <T>(path: string) => request<T>(path, 'DELETE'),
}
