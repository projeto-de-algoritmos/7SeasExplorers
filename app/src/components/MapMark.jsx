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
      className={`absolute w-8 h-8 rounded-full ${color} hover:opacity-95 transition-opacity cursor-pointer z-10`}
      style={style}
      onClick={() => handleWithUserSelection(item)}
    ></div>
  );
}
