export default function Card({ title, children }) {
    return (
      <div className="bg-white shadow-md rounded-md p-4 m-2">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div>{children}</div>
      </div>
    );
  }
  