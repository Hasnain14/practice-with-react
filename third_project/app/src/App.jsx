import { useEffect, useState } from 'react'
import Header_section from './component/header_section/header_section'
import styled from 'styled-components'


import './App.css'
import Food_cards from './component/food_card/food_card';
// import Button from './component/button/button';



function App() {
  
  const [data, setData] = useState();
  const [searchData, setSearchData] = useState();
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect (()=> {
    const dataFood = async () => {
      const  data = await (await fetch('http://localhost:9000/')).json();
      
      setSearchData(data);
      setData(data);
      // console.log(data);
    }
    dataFood();
  },[])

  const SearchFood = (e) => {
    const searchValue = e.target.value;
    
    if(searchValue === "")
    setSearchData(null);

    const filter_data = data?.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchData(filter_data);
  }
  
  const filterFood = (type) => {
    if (type === "all") {
      setSearchData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setSearchData(filter);
    setSelectedBtn(type);
  };

  const btnType = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  return (
    <>
        {/* <Header_section /> */}

        <Header_style>
            <div className="top">
                <img src="images/logo.svg" alt="Logo" />
                <input onChange={SearchFood} type="text" placeholder="Search For Recipes" />
            </div>
            <div className="btn">
              {btnType.map((value) => (
              <Button
              
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
                {value.name}
              </Button>
            ))}
                {/* <Button text="ALL"/>
                <Button text="breakfast"/>
                <Button text="lunch"/>
                <Button text="dinner"/> */}

            </div>
        </Header_style>

        
        <Food_cards data = {searchData} />
    </>
  )
}


const Header_style = styled.section`
    background-color: rgb(31, 30, 30);
    height: 120px;
    padding: 20px;
    @media only screen and (max-width: 600px){
      
        height :180px;
        

        .top{
          flex-direction: column;
          
        }

        .top input{
          padding: 10px 10px;
          border: none;
          width: 300px;   
          height: 30px;
          align-self: center;
          margin-top: 10px; 
          margin-bottom: 10px;   
      }
      .top img{
        height: 50px;  
    }
    }
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

const Button = styled.button`
   color : white;
   background-color: rgb(187, 15, 15);
   border: none;
   padding: 5px 10px;
   border-radius: 10px;
   text-transform: uppercase;`

export default App
