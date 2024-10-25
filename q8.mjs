import fetch from "node-fetch";

async function fetchData() {
  try {
    const response = await fetch("https://google.com");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
