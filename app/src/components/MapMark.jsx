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

  return (
    <div
      className={`absolute w-8 h-8 rounded-full bg-yellow-500 hover:opacity-95 transition-opacity cursor-pointer ${setColorToSelectedPoints(
        item
      )} z-10`}
      style={style}
      onClick={() => handleWithUserSelection(item)}
    ></div>
  );
}
