export function appendHeadersToUrl(url: string, params?: any) {
  return {
    url,
    params,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
      "X-RapidAPI-Host": import.meta.env.VITE_X_RapidAPI_Host,
    },
  };
}
