import Button from "../button/button";
import styled from 'styled-components'



const Header_section = () => {
    return (
        <Header_style>
            <div className="top">
                <img src="images/logo.svg" alt="Logo" />
                <input onChange={SearcFood} type="text" placeholder="Search For Recipes" />
            </div>
            <div className="btn">
                <Button text="ALL"/>
                <Button text="breakfast"/>
                <Button text="lunch"/>
                <Button text="dinner"/>

            </div>
        </Header_style>
    )
}

const Header_style = styled.section`
    background-color: rgb(31, 30, 30);;
    height: 120px;
    padding: 20px;

    .top{
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        margin: 0 30px;
        margin-bottom: 10px;
    }
    .top input{
        padding: 0 10px;
        border: none;
        
    }
    .btn{
        display: flex;
        justify-content: center;
        gap: 15px;
        
    }
`

export default Header_section;