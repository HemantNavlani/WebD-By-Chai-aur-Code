import './App.css'
import Card from './components/Card'
function App() {
  let myObj = {
    username : "hitesh",
    age:21
  }
  let newArr = [1,2,3,4]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl
    mb-4' >Tailwind test </h1>

    {/* <Card username="chaiaurcode" obj = {myObj} arr = {newArr  }/> */}
    <Card username="hemant" btnText='Visit Profile'/>
    <Card username="navlani"/>


    </>
  )
}

export default App
