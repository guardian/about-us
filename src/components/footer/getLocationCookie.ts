let countryCode: string | null = null;

export const getGeoLocation = (): string | null => {
  if (countryCode === null) {
    countryCode = getCookie("GU_geo_country");
  }
  return countryCode;
};

const getCookie = (name: string): string | null => {
  const cookies: string[] = document?.cookie
    .split(";")
    .filter((keyValue) => keyValue.trim().startsWith(`${name}=`));
  return cookies.length ? cookies[0].trim().replace(`${name}=`, "=") : null;
};
