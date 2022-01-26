import { useEffect, useState } from 'react';
import { getVillagers } from '../../services/villagers';
import List from '../../Components/List/List';
export default function Home() {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVillagers();
      setVillagers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>Welcome Home</div>
      <List villagers={villagers} />
    </>
  );
}
