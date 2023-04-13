import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Routes>
          <Route path="/" element={'Home'} />
          <Route path="*" element={'Not Found'} />
        </Routes>
      </h1>
      <NavLink to="/">Home</NavLink>
    </header>
  );
};

export default Header;
