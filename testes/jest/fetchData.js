import axios from "axios";

export async function fetchData() {
  return "data received";
}

export async function fetchAdvice() {
  const advice = await axios.get("https://api.adviceslip.com/advice");
  return advice.data.slip;
}

export async function fetchAdviceById(id) {
  const advice = await axios.get(`https://api.adviceslip.com/advice/${id}`);
  return advice.data.slip;
}
