export function MapMark({
  mapGraph,
  item,
  handleWithUserSelection,
  setColorToSelectedPoints,
}) {
  const style = {
    left: mapGraph[item].left,
    top: mapGraph[item].top,
    transform: "translate(-50%, -50%)",
  };

  const color = setColorToSelectedPoints(item)

  return (
    <div
      id={item}
      className={`absolute px-2 py-1 rounded-md ${color} hover:opacity-95 transition-opacity cursor-pointer z-10 text-white`}
      style={style}
      onClick={() => handleWithUserSelection(item)}
    >{item}</div>
  );
}
