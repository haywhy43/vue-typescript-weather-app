export const getData = async (searchParam: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchParam}&appid=${process.env.VUE_APP_WEATHER_API_KEY}`,
    {
      method: "GET"
    }
  );

  return response.json()
};
