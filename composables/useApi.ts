export const useApi: typeof useFetch = (request, opts?) => {
  return useFetch(request, { baseURL: `${baseUrl}/api/collections/`, ...opts })
}
