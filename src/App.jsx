
import { useState } from 'react'
import './App.css'
import ActiveUsers from './component/ActiveUsers'
import Banner from './component/Banner'
import Cart from './component/Cart'
import Models from './component/Models'
import Navbar from './component/Navbar'
import Premium from './component/Premium'

const getModels = async () => {
  const res = await fetch("/public/digitools.json")
  return res.json()
}

const modelPromise = getModels()


function App() {

  const [activeTab, setActiveTab] = useState("products")
  console.log(activeTab);

  const [carts, setCarts] = useState([]);

  return (
    <>
      <div className='my-5'>
        <Navbar></Navbar>

        <Banner></Banner>

        <ActiveUsers></ActiveUsers>

        <Premium></Premium>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box justify-center bg-transparent mb-16 gap-3">
          <input onClick={()=> setActiveTab("products")} type="radio" name="my_tabs_1" className="tab rounded-full w-30 checked:bg-linear-to-r from-indigo-600 to-purple-600 font-bold btn" aria-label="Products" defaultChecked />
          <input onClick={()=> setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab rounded-full w-30 checked:bg-linear-to-r from-indigo-600 to-purple-600 font-bold btn" aria-label={`Cart (${carts.length})`} />

        </div>

        {activeTab === "products" ? <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models> : <Cart carts={carts} setCarts={setCarts}></Cart>}

        

        
      </div>
    </>
  )
}

export default App
