import './Card.css'; // We'll style it later

function Card({ title, children }) {
  return (
    <div className="border rounded-lg p-4 shadow">
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}

export default Card;