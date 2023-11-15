
import './App.css'
import BasicCard from './component/card/card'
import Header from './component/header/header'
import data from '../src/fakeData/fakeData.json'

function App() {
  
console.log(data);
  return (
    <>
        <div  className="card_show">
          {data.map( course => 
            <BasicCard course = {course} key = {data.id}></BasicCard>
            )}
          {/* <BasicCard></BasicCard> */}
        </div>
    </>
  )
}

export default App
