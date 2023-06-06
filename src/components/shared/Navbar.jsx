import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";

const Navbar = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() );
    }

    return (
      <div className='container'>
          <div>
              <h1>Hello world from my Navbar</h1>
              <button onClick={onLogout}>Logout</button>
          </div>        
      </div>
    )
  }
  
  export default Navbar 