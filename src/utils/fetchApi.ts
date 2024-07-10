export const fetchApi = (
  input: string,
  init?: RequestInit
): Promise<Response> => {
  return fetch(
    process.env.API_URL
      ? process.env.API_URL + input
      : "https://dummyjson.com" + input,
    {
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
      ...init,
    }
  );
};
