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

export function appendHeadersToNewsUrl(url: string, params?: any) {
  return {
    url,
    params,
    headers: {
      "X-BingApis-SDK": import.meta.env.VITE_X_BingApis_SDK,
      "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
      "X-RapidAPI-Host": import.meta.env.VITE_X_RapidAPI_Host_News,
    },
  };
}
