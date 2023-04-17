import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

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

export function formatTime(date: string | Dayjs) {
  return dayjs(date).fromNow();
}
