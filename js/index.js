console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data.results[2].eye_color);

    if (response.ok) {
      return data;
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurented");
  }
}
fetchData().then((starwarsData) => {
  console.log("result", starwarsData);
});
