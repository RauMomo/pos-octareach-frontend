import cls from "classnames";
import React from 'react';
import styles from '../components/styles/outlinebutton.module.css';
import getSecondString from "../utils/string_manipulation";

class OutlineButton extends React.Component{
  render() {
    const defaultColor = 'main';
    var textColor = this.props.color == null ? defaultColor : this.props.color;
    var bgColor = getSecondString(textColor) ?? defaultColor;
    console.log(bgColor);

    var handleClick = this.props.onClick;
    var buttonColor = `${textColor} hover:bg-${bgColor} hover:text-white`
    
    return (
      <button type="button" className={cls(styles.button, buttonColor)} onClick={handleClick}>
        {this.props.name}
      </button>
      // Button variant='outline' backgroundColor='lightgray'
      //   borderColor={{ backgroundColor }} _hover={{ backgroundColor: { backgroundColor } }} onClick={handleClick} className={styles.button} 
    )
  }
}

export default OutlineButton;