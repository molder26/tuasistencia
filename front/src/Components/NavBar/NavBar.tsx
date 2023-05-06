import * as React from "react";
import { Link, useLocation } from "react-router-dom";
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
import AdbIcon from "@mui/icons-material/Adb";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2';


import logoAsist from '../../static/images/avatar/logoAsist.jpg';
import BotonLogin from '../BotonLogin/BotonLogin';
import Perfil from '../BotonLogin/Perfil';
import BotonLogout from '../BotonLogin/BotonLogout';

const pages = ["Marcacion", "Empleados", "Informes", "Contacto"];

function NavBar() {
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { isAuthenticated, user } = useAuth0();


  return (
    <AppBar position="static">
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Stack direction="row"  >
            <Avatar
              alt="Logo"
              src={logoAsist}
              sx={{ width: 55, height: 55, border: '3px solid black', marginRight: '45px' }}
            />
          </Stack>
          <Stack justifyContent="start" width="100%">
            <Typography
              width="100%"
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                // border: "2px solid black",
                width: "90%",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                userSelect: "none",
              }}
            >
              TU ASISTENCIA
            </Typography>
          </Stack>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  selected={page === location.pathname.split("/").pop()}
                >
                  <Typography textAlign="center">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                      to={`/${page}`}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            style={{ display: "none" }}
          >
            TU ASISTENCIA
          </Typography>
          {
            isAuthenticated && (
              <Stack
                sx={{
                  flexDirection: "row",
                  display: { xs: "none", md: "flex" },
                  // border: "2px solid black",
                  justifyContent: "space-between",
                  mr: 8,
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    disabled={page === location.pathname.split("/").pop()}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                      to={`/${page}`}
                    >
                      {page}
                    </Link>
                  </Button>
                ))}

              </Stack>
            )}
          <Stack direction="row" spacing={1} width={340} >
            <Stack direction="row" width={250} >

              <Perfil />
            </Stack>
            {isAuthenticated ? <BotonLogout /> : <BotonLogin />}
          </Stack>

        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default NavBar;
