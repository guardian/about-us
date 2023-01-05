import type { CountryCode } from '@guardian/libs';

let countryCode: string | null = null;

export const getGeoLocation = (): CountryCode | null => {
  if (countryCode === null) {
    countryCode = getCookie("GU_geo_country") as CountryCode;
  }
  
  return countryCode as CountryCode;
};

const getCookie = (name: string): string | null => {
  const cookies: string[] = document?.cookie
    .split(";")
    .filter((keyValue) => keyValue.trim().startsWith(`${name}=`));
  return cookies.length ? cookies[0].trim().replace(`${name}=`, "") : null;
};
