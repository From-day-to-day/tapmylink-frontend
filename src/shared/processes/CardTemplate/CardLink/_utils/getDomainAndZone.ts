export const getDomainAndZone = (url: string) => {
  const hostname = new URL(url).hostname;
  const parts = hostname.split('.');

  return parts.slice(-2).join('.');
};
