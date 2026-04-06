
import './App.css'
import ActiveUsers from './component/ActiveUsers'
import Banner from './component/Banner'
import Navbar from './component/Navbar'


function App() {
  

  return (
    <>
      <div className='my-5'>
        <Navbar></Navbar>

        <Banner></Banner>

        <ActiveUsers></ActiveUsers>
      </div>
    </>
  )
}

export default App
