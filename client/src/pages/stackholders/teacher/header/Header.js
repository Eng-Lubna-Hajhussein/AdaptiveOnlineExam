import React, { useContext } from "react";
import {
  Button,
  Grid,
  Select,
  AppBar,
  Toolbar,
  Box,
  alpha,
  cssInjection as styled,
  TextField,
  MenuItem,
  SvgIcon,
} from "@basetoolkit/ui";
import logo from "../../../../assets/logo.png";
import { AppContext } from "../../../../contextapi/contexts/AppContext";
import { Link } from "react-router-dom";
import { textFieldClasses } from "@basetoolkit/ui/classes";
import useFetch from "../../../../hooks/useFetch";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 2,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "inherit",
  width: "auto !important",
  py: 0,
  "& input::placeholder": {
    color: "inherit",
  },
  [theme.breakpoints.up("sm")]: {
    width: "18ch",
    [`& .${textFieldClasses.focused}`]: {
      width: "23ch !important",
    },
  },
  [`& .${textFieldClasses.wrapper}`]: {
    width: "18ch",
    py: "5px !important",
    borderRadius: 2,
    border: "none",
    transition: theme.transitions.create("width"),
  },
}));

export default function Header() {
  const { appState, appDispatch } = useContext(AppContext);
  const [{ data, isLoading, isError }, fetchData] = useFetch();

  const dictionary = {
    search: {
      en: "Search...",
      ar: "...ابحث",
    },
    signup: {
      en: "SIGNUP",
      ar: "انشاء حساب",
    },
    login: {
      en: "LOGIN",
      ar: "تسجيل الدخول",
    },
    logout: {
      en: "LOGOUT",
      ar: "تسجيل الخروج",
    },
  };

  const handleLogout = async () => {
    await fetchData("http://localhost:4000/teachers/logout");
    appDispatch({
      type: "LOGOUT",
    });
  };

  const handleChange = (selected) => {
    appDispatch({
      type: "CHANGE_LANGUAGE",
      lang: selected.value,
    });
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      display="flex"
      justifyContent="center"
      dir={appState.dir}
    >
      <AppBar
        position="static"
        width={"100%"}
        style={{
          background: "#B1D9B2",
          height: "150px",
          verticalAlign: "middle",
        }}
      >
        <Toolbar sx={{ height: "150px" }}>
          <Grid
            container
            xs="12"
            height={"100%"}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs="2" container justifyContent={"start"}>
              <img src={logo} style={{ width: "200px", height: "60px" }} />
            </Grid>
            <Grid
              item
              xs="2"
              container
              height={"80px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Search sx={{ width: "80%", minWidth: "80%" }}>
                <StyledTextField
                  placeholder={dictionary.search[appState.lang]}
                  inputProps={{ "aria-label": "search" }}
                  InputProps={{
                    endAdornment: <SvgIcon icon="search" color="white" />,
                  }}
                />
              </Search>
            </Grid>

            <Grid item xs="8" container justifyContent={"end"}>
              <Grid item xs="12" container justifyContent={"end"}>
                <Grid
                  item
                  xs="8"
                  container
                  p={"5px"}
                  height={"60px"}
                  justifyContent={"end"}
                  alignItems={"center"}
                >
                  <Link to={"/login"}>
                    <Button
                      variant="text"
                      onClick={handleLogout}
                      endIcon={
                        <SvgIcon
                          icon="logout"
                          color="primary"
                          sx={{ margin: "10px" }}
                        />
                      }
                    >
                      {dictionary.logout[appState.lang]}
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs="2" container justifyContent="end">
                  <Box
                    sx={{
                      minWidth: 80,
                      width: "fit-content",
                      minHeight: 40,
                      padding: 0,
                    }}
                  >
                    <Select
                      autoFocus
                      fullWidth
                      error
                      variant="outlined"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={{ value: appState.lang, label: appState.lang }}
                      label={
                        <SvgIcon
                          icon="language"
                          fontSize={30}
                          color="primary"
                        />
                      }
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value={"en"}>English (en)</MenuItem>
                      <MenuItem value={"ar"}>العربية (ar)</MenuItem>
                    </Select>
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
