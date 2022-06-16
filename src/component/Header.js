export default function Header({ totalNumberOfItems, totalPrice, formatter }) {
  return (
    <div>
      <h1>Shopping Cart</h1>

      <h3>Number Of Items: {totalNumberOfItems}</h3>
      <h3>Total: {formatter.format(totalPrice)}</h3>
    </div>
  );
}
