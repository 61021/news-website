export function useMyFetch<T>(request, opts?) {
  const config = useRuntimeConfig()

  return useFetch<T>(request, {
    baseURL: config.public.baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...opts,
  })
}
