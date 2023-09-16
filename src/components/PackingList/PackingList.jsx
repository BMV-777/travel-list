import React from "react";

import Item from "../Item/Item";

const PackingList = ({ initialItems }) => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item, index) => (
          <Item item={item} key={index} />
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
