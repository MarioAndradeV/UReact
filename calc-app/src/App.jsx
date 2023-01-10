import React from "react";
import Result from "./components/Result"
import "./App.css";

//Generación de la funcion del componente  con una Función flecha o Arrow function
const App = () => {
  //Lo que ejecuta la función
  console.log("Renderización de App");
  return (
    <main className="react-calculator">
     <Result value={0} text="hola"/>
     {/* <Result value="hola/> */}
        <div className="numbers">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>
                clear
            </button>
            <button>
                r
            </button>
        </div>
        <div className="math-operations">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <button>=</button>
        </div>
    </main>
  );
};

// Exportación

export default App;
