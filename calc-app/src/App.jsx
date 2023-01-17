import React from "react";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations"
import Result from "./components/Result"


import "./App.css";

//Generación de la funcion del componente  con una Función flecha o Arrow function
const App = () => {
  //Lo que ejecuta la función
  console.log("Renderización de App");

  
  return (
    <main className="react-calculator">
     <Result value={"0"} text="hola"/>
     {/* <Result value="hola/> */}
      <Numbers onClickNumber={ number => console.log("Number: ", number)}/>
      <Functions onContentClear={() => console.log("Content clear")} onDelete={() => console.log("onDelete")}/>
      <MathOperations onClickOperation={operation => console.log("Operation:", operation)} onClickEqual={equal => console.log("Equal: ", equal)} />
    </main>
  );
};

// Exportación

export default App;
