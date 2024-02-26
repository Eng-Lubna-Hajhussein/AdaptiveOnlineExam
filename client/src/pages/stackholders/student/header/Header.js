import React,{useContext, useEffect}  from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../../../../assets/logo.png";
import { Button, FormControl, Grid, InputLabel, Select } from "@mui/material";
import { AppContext } from "../../../../contextapi/contexts/AppContext";
import LanguageIcon from "@mui/icons-material/Language";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LogoutIcon from '@mui/icons-material/Logout';
// import LogoutIcon from '@mui/icons-material/HowToReg';
import { Link } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
  const { appState, appDispatch } = useContext(AppContext);
  const [{ data, isLoading, isError }, fetchData] = useFetch();

  const dictionary = {
    search:{
      en:"Search...",
      ar:"...ابحث"
    },
    signup:{
      en:"SIGNUP",
      ar:"انشاء حساب"
    },
    login:{
      en:"LOGIN",
      ar:"تسجيل الدخول"
    },
    logout:{
      en:"LOGOUT",
      ar:"تسجيل الخروج"
    }
  }

  const handleLogout = async()=>{
    await fetchData('http://localhost:4000/teachers/logout');
    appDispatch({
      type: "LOGOUT",
    });
  }


  const handleChange = (event) => {
    appDispatch({
      type:"CHANGE_LANGUAGE",
      lang:event.target.value
    })
  };

  return (
    <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center" dir={appState.dir}>
      <AppBar
        position="static"
        style={{
          background: "#B1D9B2",
          height: "150px",
          width: "1386px",
          verticalAlign: "middle",
        }}
      >
        <Toolbar sx={{ height: "150px" }}>
          <Grid container xs="12">
            <Grid item xs="2" container justifyContent={"flex-start"}>
              <img src={logo} style={{ width: "200px", height: "60px" }} />
            </Grid>
            <Grid item xs="2" container sx={{height:"60px"}} justifyContent={"center"} alignItems={"center"}>
                <Search sx={{width:"80%",minWidth:"80%"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={dictionary.search[appState.lang]}
              inputProps={{ 'aria-label': "search" }}
            />
          </Search>
            </Grid>

            <Grid item xs="8" container justifyContent={"flex-end"}>
              <Grid item xs="12" container justifyContent={"flex-end"}  >
                <Grid item xs="8" container sx={{height:"60px",padding:"5px"}}  justifyContent={"flex-end"} alignItems={"center"}>
                {/* 216c27 */}
                <Link to={"/login"}>
                <Button variant="text" onClick={handleLogout} sx={{color:"#e92239"}} endIcon={<LogoutIcon sx={{margin:"10px"}} />}>{dictionary.logout[appState.lang]}</Button>
                </Link>
                  </Grid> 
                <Grid item xs="2">
              <Box sx={{ minWidth: 80,width:'fit-content', minHeight:40, padding:0 }}>
                <FormControl fullWidth variant="outlined" error>
                  <InputLabel id="demo-simple-select-label">
                    <LanguageIcon
                      color="#e92239"
                      style={{ fontSize: "30px", color: "#e92239" }}
                    />
                  </InputLabel>
                  <Select
                  autoFocus
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={appState.lang}
                    label="Age"
                    onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value={"en"}>English (en)</MenuItem>
                    <MenuItem value={"ar"}>العربية (ar)</MenuItem>
                  </Select>
                </FormControl>
              </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
