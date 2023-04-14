export function appendHeadersToUrl(url: string) {
  return {
    url,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
      "X-RapidAPI-Host": import.meta.env.VITE_X_RapidAPI_Host,
    },
  };
}
