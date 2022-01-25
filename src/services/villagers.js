export async function getVillagers() {
  const response = await fetch('https://acnhapi.com/v1a/villagers/');
  const data = await response.json();
  console.log('data', data);
  return data;
}
