
import './App.css'
import ActiveUsers from './component/ActiveUsers'
import Banner from './component/Banner'
import Models from './component/Models'
import Navbar from './component/Navbar'

const getModels = async() =>{
  const res = await fetch("/public/digitools.json")
  return res.json()
}

const modelPromise = getModels()


function App() {
  

  return (
    <>
      <div className='my-5'>
        <Navbar></Navbar>

        <Banner></Banner>

        <ActiveUsers></ActiveUsers>

        <Models modelPromise={modelPromise}></Models>
      </div>
    </>
  )
}

export default App
