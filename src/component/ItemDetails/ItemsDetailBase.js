import ItemsDetailDisplay from "./ItemsDetailDisplay";
import ItemsDetailEditing from "./ItemsDetailEditing";

export default function ItemsDetailBase({
  itemList,
  removeItem,
  editItem,
  editableItemList,
  cancelChange,
  updateItem,
  formatter,
}) {
  return (
    <div>
      {itemList.map((item, idx) => (
        <div key={idx}>
          <h4>{item.name}</h4>
          {!editableItemList.includes(item) ? (
            <ItemsDetailDisplay
              item={item}
              price={item.price * item.quantity}
              formatter={formatter}
              removeItem={() => removeItem(item)}
              editItem={() => editItem(item)}
            />
          ) : (
            <ItemsDetailEditing
              item={item}
              price={item.price * item.quantity}
              formatter={formatter}
              cancelChange={()=>cancelChange(item)}
              updateItem={updateItem}
              removeItem={() => removeItem(item)}
            />
          )}
        </div>
      ))}
    </div>
  );
}
