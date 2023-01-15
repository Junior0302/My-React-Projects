import { useState } from "react";
import Fruit from "./components/Fruit";
import Form from "./components/Form";

function App() {
  // State (etat ou donnees)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Banane" },
    { id: 2, nom: "Orange" },
    { id: 3, nom: "Mangue" }
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");

  // Comportement

  // const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputRef.current.value);
    const fruitsCopys = [...fruits];

    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    fruitsCopys.push(fruitAAjouter);

    setFruits(fruitsCopys);
    setNouveauFruit("");
  };

  const handleDelete = (id) => {
    // Copie du state
    const fruitsCopy = [...fruits];
    // Manipuler mon state

    const fruitCopyupdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    // Modifier mon state le setter
    setFruits(fruitCopyupdated);
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  //  Affichage (render)

  return (
    <div>
      <h1>Ma liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit fruitInfo={fruit} onFruitDelete={handleDelete} />
        ))}
      </ul>
      <Form
        onSubmit={handleSubmit}
        fruitNouveau={nouveauFruit}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
