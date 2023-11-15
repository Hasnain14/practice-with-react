
import style from "./button.module.css"



const Button = (props) => {
    return (
        <div>
            <button className={props.isBig ? style.button_secondery : style.button_primary}>
                 {props.iconBtn} {props.text}
            </button>
      
        </div>
    )
}

export default Button;