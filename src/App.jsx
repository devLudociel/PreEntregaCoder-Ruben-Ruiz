import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import SideBar from './Components/SideBar/SideBar'
import Body from './Components/BodySection/Body/Body'
function App() {

  return (
    <div className='container'>
      {/* <Navbar />
      <ItemListContainer greeting={"Esperamos volver a verte Pronto"}/> */}
      <SideBar /> 
      <Body />
    </div>
  )
}

export default App
