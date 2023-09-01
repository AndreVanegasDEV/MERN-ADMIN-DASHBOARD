import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  useTheme,
  Link,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  AppRegistration,
  HowToReg,
  ListAlt,
  PublicOutlined,
  BookmarkAdd,
  MenuBook,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import logoAtenea from "assets/logoAtenea.png";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Líderes",
    icon: null,
  },
  {
    // Registrar - Products
    text: "Registrar",
    icon: <HowToReg />,
  },
  // {
  //   // Editar
  //   text: "Customers",
  //   icon: <AppRegistration />,
  // },
  {
    // Lista
    text: "Lista",
    icon: <ListAlt />,
  },
  // {
  //   text: "Geography",
  //   icon: <PublicOutlined />,
  // },
  {
    text: "Simpatizantes",
    icon: null,
  },
  {
    // Registrar votante
    text: "Inscribir",
    icon: <HowToReg />,
  },
  {
    // Lista
    text: "Registro",
    icon: <ListAlt />,
  },
  {
    text: "Reuniones",
    icon: null,
  },
  {
  // Crear
    text: "Crear",
    icon: <BookmarkAdd />,
  },
  {
    // Agenda
    text: "Agenda",
    icon: <CalendarMonthOutlined />,
  },
  // {
  //   // Editar 
  //   text: "Monthly",
  //   icon: <MenuBook />,
  // },
  // {
  //   text: "Breakdown",
  //   icon: <PieChartOutlined />,
  // },
  {
    text: "Gestión",
    icon: null,
  },
  {
    // Adminitración
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  // {
  //   text: "Performance",
  //   icon: <TrendingUpOutlined />,
  // },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box>
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                {/* <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Atenea Dashboard
                  </Typography>
                </Box> */}
                <Box
                  component="img"
                  alt="logoAtenea"
                  src={logoAtenea}
                  height="auto"
                  width="150px"
                  sx={{ objectFit: "cover" }}
                />
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
