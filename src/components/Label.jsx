function Label({ id, text }) {
  return (
    <label htmlFor={id} className="block text-black text-sm font-bold mb-1">
      {text}
    </label>
  );
}

export default Label;
