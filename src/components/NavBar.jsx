import { Mail, Notifications } from "@mui/icons-material";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "2.5px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: 20,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        {/* Logo */}
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          RISHOV
        </Typography>
        <SettingsEthernetIcon sx={{ display: { xs: "block", sm: "none" } }} />

        {/* Search */}
        <Search>
          <InputBase fullWidth placeholder="Search..." />
        </Search>

        {/* Icons */}
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail sx={{cursor: "pointer"}} />
          </Badge>

          <Badge badgeContent={2} color="error">
            <Notifications sx={{cursor: "pointer"}} />
          </Badge>

          <Avatar
            sx={{ width: "30px", height: "30px", cursor: "pointer" }}
            src="https://i.ibb.co.com/YdMJvjX/prothomalo-english-2024-09-26-to3kv893-GYQARW4-WEAAMRr-T.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        {/* User Box */}
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://i.ibb.co.com/YdMJvjX/prothomalo-english-2024-09-26-to3kv893-GYQARW4-WEAAMRr-T.jpg"
          />
          <Typography variant="body2">John Dev</Typography>
        </UserBox>
      </StyledToolBar>

      {/* Menu */}
      <Menu
        onClose={(e) => setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
