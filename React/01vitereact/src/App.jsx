import Chai from './chai'
function App() {
  const username = "Hemant"
  return (
    <>
    <Chai/>
    {/* JSX Curlies */}
    <h1>Chai aur React {username} 
    {/* This is an evaluated expression */}
    </h1>
    <p>test para </p>
    </>
  )
}

export default App
