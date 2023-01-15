export default function Form({ onSubmit, fruitNouveau, onChange }) {
  return (
    <form action="submit" onSubmit={onSubmit}>
      <input
        value={fruitNouveau}
        type="text"
        placeholder=" Ajouter un fruit..."
        onChange={onChange}
      />
      <button>Ajouter +</button>
    </form>
  );
}
