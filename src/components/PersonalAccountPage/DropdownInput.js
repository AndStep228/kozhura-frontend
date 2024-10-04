import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function DropdownInput({
  itemsList = [],
  inputType,
  inputPlaceholder,
  inputName,
}) {
  const [items, setItems] = useState(itemsList);
  console.log(inputName);
  const [inputValue, setInputValue] = useState(
    localStorage.getItem(inputName) || ""
  );

  const [filteredItems, setFilteredItems] = useState(items);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setItems(itemsList);
    setFilteredItems(itemsList);
  }, [itemsList]);

  // Сохраняем значение поля ввода в localStorage
  useEffect(() => {
    localStorage.setItem(inputName, inputValue);
  }, [inputValue, inputName]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredItems(
      items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const handleItemClick = (item) => {
    setInputValue(item);
    setShowDropdown(false);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="dropdown">
      <input
        id={inputName}
        type={inputType || "text"}
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleDropdownToggle}
        placeholder={inputPlaceholder || "Select an item"}
        className="data-inputs"
      />
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="dropdown-menu"
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={item}>
                  <div
                    className="dropdown-menu__item"
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </div>
                  {filteredItems.length > 1 &&
                  index !== filteredItems.length - 1 ? (
                    <div className="dropdown__line"></div>
                  ) : (
                    ""
                  )}
                </div>
              ))
            ) : (
              <li>Нет вариантов</li>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropdownInput;
