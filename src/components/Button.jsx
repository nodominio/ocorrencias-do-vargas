import { Link } from "react-router-dom";

function Button({ type, text, link }) {
  return (
    <Link to={link}>
      <button
      type={type}
      className="bg-blue-500 hover:bg-blue-700 text-white w-full px-3 py-2 font-bold rounded"
    >
      {text}
    </button>
    </Link>
    
  );
}

export default Button;
