 
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
      <nev> 
            <ul>
                <li>
                    <Link to='/' >  Home </Link>   
                </li>
                <li>
                    <Link to='/about' > About </Link>   
                </li>
                <li>
                    <Link to='/contact' > Contact </Link>   
                </li>
            </ul> 
    </nev>
  )
}

export default Navbar