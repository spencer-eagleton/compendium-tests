import { useEffect, useState } from 'react';
import './App.css';
import { getVillagers } from './services/villagers';

function App() {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVillagers();
      setVillagers(data);
    };
    fetchData();
  }, []);
  console.log(villagers.id);
  return (
    <div className="App">
      {villagers.map((vill) => (
        <>
          <p key={vill.id}>{vill.name['name-USen']}</p>
          <img src={vill.icon_uri} />
        </>
      ))}
    </div>
  );
}

export default App;
