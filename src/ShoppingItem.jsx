export default function ShoppingItem({ item, onDelete }) {
  return (
    <li>
      <span>{item.name} — {item.price} сом</span>

      <button onClick={() => onDelete(item.id)}>
        Удалить
      </button>
    </li>
  );
}