import React, { useState, useEffect, forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DropdownInput = forwardRef(function DropdownInput(
  { itemsList = [], inputType, inputPlaceholder, name, value = "", onChange },
  ref
) {
  const [items, setItems] = useState(itemsList);
  const [filteredItems, setFilteredItems] = useState(itemsList);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setItems(itemsList);
    setFilteredItems(itemsList);
  }, [itemsList]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
    setFilteredItems(
      items.filter(
        (item) => item && item.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  const handleItemClick = (item) => {
    onChange(item);
    setShowDropdown(false);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="dropdown">
      <input
        id={name}
        name={name}
        type={inputType || "text"}
        value={value || ""}
        onChange={handleInputChange}
        onClick={handleDropdownToggle}
        placeholder={inputPlaceholder || "Выберите элемент"}
        className="data-inputs"
        ref={ref}
        autoComplete="off"
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
                <div key={index}>
                  <div
                    className="dropdown-menu__item"
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </div>
                  {filteredItems.length > 1 &&
                  index !== filteredItems.length - 1 ? (
                    <div className="dropdown__line"></div>
                  ) : null}
                </div>
              ))
            ) : (
              <div className="dropdown-menu__item">Нет вариантов</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default DropdownInput;
