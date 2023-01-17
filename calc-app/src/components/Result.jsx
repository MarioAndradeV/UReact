import React from 'react'
import PropTypes from 'prop-types'

// const Result = (props) =>{
//     // debugger
//     console.log("Renderización de Result", props);
//     return(
//         <div className="result">
//             {props.value}
//         </div>
//     )

// }


// const Result = (props) =>{
//     const{value} = props;
//     // debugger
//     console.log("Renderización de Result", value);
//     return(
//         <div className="result">
//             {value}
//         </div>
//     )

// }

// Object Destructuring mejor forma
const Result = ({value, text}) =>{
    
    // debugger
    console.log("Renderización de Result", value , text);
    return(
        <div className="result">
            {value}
        </div>
    )

}

Result.propTypes ={
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value:"0"

}

export default Result;



// Object Destructuring ECMAS6

// const person ={
//     id:1,
//     name:"Juan",
//     nick:"Juan1",
// }

// const {id, name, nick} = person;


