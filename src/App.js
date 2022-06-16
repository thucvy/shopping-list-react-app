// Shopping Cart
// Total numbers of items
// Button to clear cart - removing all items (disabled when cart is empty)
// List of all items and each of them should include:
//1. item name
//2. item qty
//3. price per unit
//4. total price for all item
//5. Button to display qty editing view
//a. Display total price for all units
//b. Display editable input field with qty value for the item
//c. 'Add one' button to add 1 more item to the total qty (qty+1)
//d. 'Remove one' button to remove 1 item from total qty (qty-1). If qty = 0, button is disabled
//e. 'Save' button to update new values (total qty for the item, total number of items in cart, total price for the entire cart, hides qty editing view).
//  If no change, 'save' button is disabled
//f. 'Cancel' button to discard change and hides qty diting view
//6. Button to remove each item, and update:
//a. total number of items for the entire cart
//b. total price for the entire cart

import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import ItemsDetailBase from "./component/ItemDetails/ItemsDetailBase";

function App() {
  const [totalNumberOfItems, setTotalNumberOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemList, setItemList] = useState(items);
  const [editableItemList, setEditableItemList] = useState([]);

  const formatter = Intl.NumberFormat("us-EN", {
    style: "currency",
    currency: "USD",
  });

  const updateItem = (itemList) => {
    setTotalNumberOfItems(0);
    setTotalPrice(0);
    itemList.forEach((item) => {
      setTotalNumberOfItems(
        (totalNumberOfItems) => totalNumberOfItems + item.quantity
      );
      setTotalPrice((totalPrice) => totalPrice + item.price * item.quantity);
    });
  };

  useEffect(() => {
    updateItem(itemList);
  }, [itemList]);

  const clearCart = () => {
    setItemList([]);
  };

  const removeItem = (i) => {
    setItemList(itemList.filter((item) => item.name !== i.name));
    updateItem(itemList);
  };

  const editItem = (item) => {
    setEditableItemList([...editableItemList, item]);
  };


  const cancelChange = (i) => {
    setEditableItemList(
      editableItemList.filter((item) => i.name !== item.name)
    );
    updateItem(itemList)
  };

  return (
    <div className="App">
      <Header
        totalNumberOfItems={totalNumberOfItems}
        totalPrice={totalPrice}
        formatter={formatter}
      />

      <button onClick={clearCart} disabled={itemList.length === 0}>
        Clear Shopping Cart
      </button>

      <ItemsDetailBase
        itemList={itemList}
        removeItem={removeItem}
        editItem={editItem}
        editableItemList={editableItemList}
        cancelChange={cancelChange}
        formatter={formatter}
      />
    </div>
  );
}

export default App;

const items = [
  { name: "Egg", price: 2.99, quantity: 1 },
  { name: "Milk", price: 1.99, quantity: 2 },
  { name: "Cheese", price: 3.99, quantity: 3 },
];
