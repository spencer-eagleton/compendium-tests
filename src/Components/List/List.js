export default function List({ villagers }) {
  return (
    <>
      <h1>List</h1>
      <div>
        {villagers.map((vill) => (
          <>
            <p key={vill.id}>{vill.name['name-USen']}</p>
            <img src={vill.icon_uri} />
          </>
        ))}
      </div>
    </>
  );
}
