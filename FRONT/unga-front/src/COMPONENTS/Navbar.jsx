import { ShoppingCart } from "phosphor-react"


const Navbar = () => {
  return (
    <div className="bg-primary items-center text-texta flex justify-between shadow-md md:px-6 md:py-4 px-8 py-4">
      <div>
        <p className="font-bold text-xl font-mono">Unga</p>
      </div>
      <div>
        <ul className="md:flex justify-center  items-center list-none font-semibold hover:cursor-pointer hidden md:visible">
          <li className="pl-4 hover:scale-105">Men</li>
          <li className="pl-4 hover:scale-105">Women</li>
          <li className="pl-4 hover:scale-105">Children</li>
        </ul>
      </div>
      <div className="flex items-center">
      <button className="bg-texta text-primary p-2 mr-2 rounded-md hover:scale-105 font-mono">Login</button>
      <ShoppingCart size={35} className="hover:cursor-pointer "/>
      <div className=" w-22 h-22 flex justify-center items-center mt-[-35px] ml-[-22px] text-yella text-md rounded-full "> 0</div>
      </div>

    </div>
  )
}

export default Navbar