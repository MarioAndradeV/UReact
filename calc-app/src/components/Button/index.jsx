import React from "react";
import PropTypes from "prop-types"
import "./Button.css"

//type = button-type-text
const Button = ({type, text, clickHandler}) =>{

    return(
        <button className={type} onClick={() => clickHandler(text)}>
            <span>{text}</span>
        </button>
    )

}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.string
}

export default Button;