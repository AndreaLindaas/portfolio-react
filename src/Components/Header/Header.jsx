import "./Header.scss";
import { Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClose = () => {
    setMenuOpen(false);
  };
  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };
  return (
    <>
      <div className="menuIcon" onClick={toggleMenu}>
        <MenuIcon />
      </div>
      <Drawer anchor="top" open={menuOpen} onClose={menuClose}>
        <ul>
          <li>
            <Link to="/">
              <span>Hjem</span>
            </Link>
          </li>
          <li>
            <Link to="/prosjekter">
              <span>Prosjekter</span>
            </Link>
          </li>
        </ul>
      </Drawer>
    </>
  );
}
