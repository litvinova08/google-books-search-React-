import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <NavLink to="/">Return to default books </NavLink>

      <NavLink to="/search"> | Search your books</NavLink>
    </div>
  );
};

export default Nav;
