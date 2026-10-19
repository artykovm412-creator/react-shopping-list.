import { useState } from "react";
import ShoppingItem from "./ShoppingItem";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Молоко", price: 80 },
    { id: 2, name: "Хлеб", price: 35 },
    { id: 3, name: "Яблоки", price: 120 }
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addItem(event) {
    event.preventDefault();

    if (name.trim() === "" || price === "" || Number(price) < 0) {
      return;
    }

    const newItem = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price)
    };

    setItems([...items, newItem]);
    setName("");
    setPrice("");
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  const total = items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="container">
      <h1>🛒 Список покупок</h1>

      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Название товара"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Цена в сомах"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          min="0"
          step="0.01"
          required
        />

        <button type="submit">Добавить товар</button>
      </form>

      <h2>Мои товары</h2>

      {items.length === 0 ? (
        <p>Список покупок пуст.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              onDelete={deleteItem}
            />
          ))}
        </ul>
      )}

      <div className="total">
        Общая стоимость:{" "}
        {total.toLocaleString("ru-RU")} сом
      </div>
    </div>
  );
}

export default App;