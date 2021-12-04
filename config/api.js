export const apiUrl = "https://manage.riimstechnology.com";

export const fetcher = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  return result;
};
