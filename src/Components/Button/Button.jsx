//import { FaMessage } from "react-icons/fa6";
import styles from './Button.module.css'
const Button = ({text,isOutline,...rest}) => {
  return (    
    <button  {...rest}  className={isOutline? styles.outline_btn: styles.primary_btn}>
     {text}
    </button>
  )
} 
export default Button;