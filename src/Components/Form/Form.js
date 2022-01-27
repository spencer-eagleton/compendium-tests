export default function Form({ selectedThing, setSelectedThing, villagers, fish, bugs, art }) {
  return (
    <div>
      <select value={selectedThing} onChange={(e) => setSelectedThing(e.target.value)}>
        <option value={villagers}>Villagers</option>
        <option value={fish}>Fish</option>
        <option value={bugs}>Bugs</option>
        <option value={art}>Art</option>
      </select>
    </div>
  );
}
