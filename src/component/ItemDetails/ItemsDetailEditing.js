import { useEffect, useState } from "react";

export default function ItemsDetailEditing({
  item,
  price,
  cancelChange,
  removeItem,
  formatter,
}) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [itemPrice, setItemPrice] = useState(price);

  useEffect(() => {
    setItemPrice(quantity * item.price);
  }, [quantity, item]);

  const saveChange = () => {
    item.quantity = parseInt(quantity)
    cancelChange(item)
    if (item.quantity === 0) removeItem(item)
  }
  return (
    <div>
      Price: {formatter.format(itemPrice)}
      <br />
      <form>
        <label htmlFor="qty">Quantity: </label>
        <input
          id="qty"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
      </form>
      <button onClick={() => setQuantity(parseInt(quantity) + 1)}>Add one</button>
      <button
        onClick={() => setQuantity(parseInt(quantity) - 1)}
        disabled={parseInt(quantity) === 0}
      >
        Remove one
      </button>
      <button onClick={saveChange} disabled={item.quantity===parseInt(quantity)}>Save</button>
      <button onClick={cancelChange}>Cancel</button>
    </div>
  );
}
