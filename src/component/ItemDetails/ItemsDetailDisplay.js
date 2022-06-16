export default function ItemsDetailDisplay({
  item,
  price,
  removeItem,
  editItem,
  formatter,
}) {
  return (
    <div>
      {item.quantity} x {formatter.format(item.price)} ={" "}
      <b>{formatter.format(price)}</b>
      <br />
      <button onClick={editItem}>Change quantity</button>
      <button
        onClick={removeItem}
      >
        Remove
      </button>
    </div>
  );
}
