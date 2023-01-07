import axios from "axios";
export const getSummary = () => axios.get("https://api.covid19api.com/summary");
export const getCountryDetail = (countryCode) =>
  axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
