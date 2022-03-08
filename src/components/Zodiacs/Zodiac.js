export default function ZodiacRender({ name, dates }) {
  return (
    <div className="zodiac-render">
      <img alt={name} src={`../assets/${name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  );
}
