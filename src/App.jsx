import React, { useState } from "react";

function App() {
  const [packList, setPackList] = useState([
    { name: "clothes", isPacked: false, isChecked: false },
    { name: "toothbrush", isPacked: true, isChecked: false },
    { name: "laptop", isPacked: true, isChecked: false },
    { name: "passport", isPacked: false, isChecked: false },
  ]);

  const handleCheckBoxChange = (index) => {
    const updatedPackList = [...packList];
    updatedPackList[index].isChecked = !updatedPackList[index].isChecked;
    setPackList(updatedPackList);
  };

  return (
    <div>
      {packList.map((item, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleCheckBoxChange(index)}
            />
            {item.isPacked && item.isChecked ? (
              <span>
                <del>{item.name}</del> &#10003;
              </span>
            ) : (
              <span>{item.name}</span>
            )}
          </label>
        </div>
      ))}
    </div>
  );
}

export default App;











