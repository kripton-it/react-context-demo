import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/LanguageContext";

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧",
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷",
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸",
  },
  russian: {
    search: "Поиск",
    flag: "🇷🇺",
  }
};

class Navbar extends Component {
  // экспериментальный синтаксис
  static contextType = ThemeContext;

  render() {
    const { isDark, toggleTheme } = this.context;
    const { classes, languageContext } = this.props;
    const { language } = languageContext;
    const { search, flag } = content[language];

    return (
      <div className={classes.root}>
            <AppBar position="static" color={isDark ? "default" : "primary"}>
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit">
                  <span role="img" aria-label={language}>
                    {flag}
                  </span>
                </IconButton>
                <Typography
                  className={classes.title}
                  variant="h6"
                  color="inherit"
                >
                  App Title
                </Typography>
                <Switch onChange={toggleTheme} />
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder={`${search}...`}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.input
                    }}
                  />
                </div>
              </Toolbar>
            </AppBar>
          </div>
    );
  }
}

// стандартный синтаксис
// Navbar.contextType = ThemeContext;

export default withLanguageContext(withStyles(styles)(Navbar));
