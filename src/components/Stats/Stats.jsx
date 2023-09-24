import React from "react";

const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>"Start adding some items to your packing list 🚀"</em>
      </p>
    );
  }

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <div className="stats">
      <footer>
        <em>
          {percentage === 100
            ? "You got everything! React to go ✈"
            : `💼You have ${numItem} items on your list, and you already packed 
            ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    </div>
  );
};

export default Stats;
