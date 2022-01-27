export async function getVillagers(selectedThing) {
  const response = await fetch(`https://acnhapi.com/v1a/${selectedThing}`);
  const data = await response.json();
  return data;
}
