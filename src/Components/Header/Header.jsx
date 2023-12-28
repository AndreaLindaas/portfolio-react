import "./Header.scss";
import { Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
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
        <p>hei</p>
      </Drawer>
    </>
  );
}
