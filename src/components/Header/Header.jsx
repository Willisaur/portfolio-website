import './Header.css';
import { NavLink } from 'react-router-dom'; // Links the pages together with "routing"


function Header() {
  return (
    <>
      <nav>
        <h2>Will Starling ⭐</h2>

        <div className='Page-Links'>
          <h3>
            <NavLink exact to='/' activeClassName="current">Home</NavLink>
          </h3>
          <h3>
            <NavLink to='/projects' activeClassName="current">Projects</NavLink>
          </h3>
        </div>
      </nav>
    </>
  );
}

export default Header;