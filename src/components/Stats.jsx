export function Stats({ totalCount, uniqueCount }) {
  return (
    <div className="stats">
      <span>Total seriales: <strong>{totalCount}</strong></span>
      <span>Únicos: <strong>{uniqueCount}</strong></span>
    </div>
  );
}

