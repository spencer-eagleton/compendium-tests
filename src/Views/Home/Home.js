import { useEffect, useState } from 'react';
import { getVillagers } from '../../services/villagers';
import List from '../../Components/List/List';
import Form from '../../Components/Form/Form';
export default function Home() {
  const [villagers, setVillagers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThing, setSelectedThing] = useState('villagers');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVillagers();
      setVillagers(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <>
      <div>Welcome Home</div>
      <Form setLoading={setLoading} />
      {loading && <span>Loading...</span>}
      {!loading && <List villagers={villagers} loading={loading} />}
    </>
  );
}
