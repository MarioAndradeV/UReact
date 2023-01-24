/* eslint no-eval: 0 */
import React, {useState} from "react";
import words from "lodash.words";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations"
import Result from "./components/Result"


import "./App.css";

//Generación de la funcion del componente  con una Función flecha o Arrow function
const App = () => {
  //Sin destructuring
  // const arrayTextoFuncionModificaTexto = useState("")
  // // arrayTextoFuncionModificaTexto => ["hola" , funcion]

  // //1er posicion: valor que inicialmente es el valor del array
  // const texto = arrayTextoFuncionModificaTexto[0]
  // //2ndo posicion: Funcion que me va a permitir modificar el valor del array
  // const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]

  // Con destructuring
  const [stack, setStack] = useState("")

  const items = words(stack, /[^-^+^*^/]+/g)
  console.log(items);




  //Lo que ejecuta la función
  console.log("Renderización de App");

  const value = items.length > 0 ? items[items.length-1] : "0";
  return (
    <main className="react-calculator">
     <Result value={value} text="hola"/>
     {/* <Result value="hola/> */}
      <Numbers onClickNumber={ number => {
        console.log("Number: ", number) 
        // setStack(stack + number)

        //Mejor opcion con Template literals
        setStack(`${stack}${number}`)
        }}/>
      <Functions 
        onContentClear={() => {
          console.log("Content clear")
          setStack("")

      }} 
        onDelete={() => {
          if(stack.length > 0){
            console.log("onDelete")
            const newStack = stack.substring(0, stack.length -1)
            setStack(newStack)
          }
          
        }}/>
      <MathOperations 
        onClickOperation={operation => {
          console.log("Operation:", operation)
          setStack(`${stack}${operation}`)
        } }

        onClickEqual={equal => {
          console.log("Equal: ", equal)
          setStack(eval(stack).toString())
          } }/>
    </main>
  );
};

// Exportación

export default App;
