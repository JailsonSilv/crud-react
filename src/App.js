import "./App.css" 
import React, {useState} from "react";
import Axios from "axios";


function App() {
  const [values, setValues] = useState('');

  const handleChangeValues = value => {
     setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
     }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:30001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response)
    });
  }

  return (
    <div className="container">
      <div className="register--container box">
        <h1 className="register--title">Scrim Shop</h1>
        <input 
          type="text" 
          name="name" 
          placeholder="Nome" 
          classeName="register--input"
          onChange={handleChangeValues}
        />
        <input 
          type="text" 
          name="cost" 
          placeholder="Preço" 
          classeName="register--input"
          onChange={handleChangeValues}
        />
        <input 
          type="text" 
          name="category" 
          placeholder="Categoria" 
          classeName="register--input"
          onChange={handleChangeValues}
        />

        <button className="register--button" onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
