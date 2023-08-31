import { NavLink } from "react-router-dom";

export default function Nav(){
  return (
    <nav>
      <ul className="flex gap-10 mr-10">
        <li>
          <NavLink to="/" className='hover:text-blue-400'>HOME</NavLink>  
        </li>
        <li>
          <NavLink to="/chart" className='hover:text-blue-400'>CHART</NavLink>  
        </li>
        <li>
          <NavLink to="/like" className='hover:text-blue-400'>LIKE</NavLink>  
        </li>
        <li>
          <NavLink to="/signin" className='hover:text-blue-400'>LOGIN</NavLink>  
        </li>
      </ul>
    </nav>
  )
}
