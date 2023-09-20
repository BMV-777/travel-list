import React from "react";

import Item from "../Item/Item";

const PackingList = ({ items, onDeleteItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <Item item={item} key={index} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
};

// function Item({ item }) {
//   return (
//     <li>
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button>❌</button>
//     </li>
//   );
// }

export default PackingList;
