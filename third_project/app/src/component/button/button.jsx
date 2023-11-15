
import styled from 'styled-components'

const Button = ({text}) => {
    return(
        <div>
            <Button_style>
                {text}
            </Button_style>
        </div>
    )
}

const Button_style = styled.button`
   color : white;
   background-color: rgb(187, 15, 15);
   border: none;
   padding: 5px 10px;
   border-radius: 10px;
   text-transform: uppercase;
`

export default Button;