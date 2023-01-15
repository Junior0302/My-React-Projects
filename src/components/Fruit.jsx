export default function Fruit({ fruitInfo, onFruitDelete }) {
  // State
  // const fruitInfo = props.fruitInfo;
  // const onFruitDelete = props.onFruitDelete;

  // Comportement

  // Affrichage render

  return (
    <li key={fruitInfo.id}>
      {fruitInfo.nom}
      {"   "}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>DELETE</button>
    </li>
  );
}
