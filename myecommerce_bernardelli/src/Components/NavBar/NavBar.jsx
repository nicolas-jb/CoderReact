import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import CartWidget from "../CartWidget";
import Categories from "../../utils/Categories.json";
import { cartContext } from "../../Context/CartContext";
import style from "./NavBar.module.css";

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const categories = Categories.data;

  let { getProductsQuantity } = useContext(cartContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#FFCC02" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to={"/"}>
              <img alt="Logo" src={logo} width="10%" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="warning"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      key={category.id}
                      to={"/category/" + category.title}
                      className={style.link}
                    >
                      <Button variant="secondary" size="large" color="dark">
                        {category.title}
                      </Button>
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link to={"/"}>
              <img alt="Logo" src={logo} width="10%" />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  key={category.id}
                  to={"/category/" + category.title}
                  className={style.link}
                >
                  {category.title}
                </Link>
              </Button>
            ))}
          </Box>
          <Box>
            <CartWidget quantity={getProductsQuantity()} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
