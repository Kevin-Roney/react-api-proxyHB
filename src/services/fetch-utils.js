
export async function getYelpData(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/yelp?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}

export async function getPokemonData(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}