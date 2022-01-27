export default function Form({ selectedThing, setSelectedThing, setLoading }) {
  return (
    <div>
      <select value={selectedThing} onChange={(e) => setSelectedThing(e.target.value)}>
        <option value="villagers">Villagers</option>
        <option value="fish">Fish</option>
        <option value="bugs">Bugs</option>
      </select>
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
