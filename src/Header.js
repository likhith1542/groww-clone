import { Button, IconButton, Input } from "@material-ui/core";
import React, { useState } from "react";
import "./Header.css";
import { SearchOutlined } from "@material-ui/icons";
import { makeStyles, Modal } from "@material-ui/core";
import { auth } from "./Firebase";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%,-${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "8px",
    outline: "none",
  },
}));

function Header({user}) {

  console.log(user)
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  // const [user, setUser] = useState(null);
  // const [user, setUser]=useContext(UserContext)
  

  const handleSignUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authuser) => {
        return authuser.user.updateProfile({
          displayName: userName,
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });

      setOpen(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      console.log(error);
      alert(error.message);
    });

    setOpen(false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__one">
        <img
          className="logo"
          src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/logo-dark-groww.83f43714.svg"
          alt=""
        />
        <div className="buttons">
          <Button className="header__explore" disableRipple={true}>
            Explore
          </Button>
          {user ? (
            <Button className="header__explore" disableRipple={true}>
              Investments
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="header__searchbar">
        <input
          className="header__search"
          placeholder="Search mutual funds and stocks"
        />
        <SearchOutlined className="header__searchicon" />
      </div>
      {user?(
        <div>
        <IconButton><NotificationsNoneIcon className="actionicons" /></IconButton>
        <IconButton><AccountBalanceWalletOutlinedIcon className="actionicons" /></IconButton>
        <IconButton><ShoppingCartOutlinedIcon className="actionicons" /></IconButton>
        <IconButton><AccountCircleOutlinedIcon className="actionicons" /></IconButton>
      </div>
      ):("")}
      {user ? (
        <Button onClick={handleLogout} className="header__login">
          Logout
        </Button>
      ) : (
        <Button onClick={() => setOpen(true)} className="header__login">
          Login/Register
        </Button>
      )}

      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form>
            <center>
              <img
                className="logo"
                src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/logo-dark-groww.83f43714.svg"
                alt=""
              />
            </center>
            <center>
              <Input
                placeholder="Username as per PAN"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </center>
            <center>
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </center>
            <center>
              <Input
                margin="10px"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </center>
            <div className="buttons">
              <Button
                type="submit"
                onClick={handleLogin}
                className="header__login"
              >
                Login
              </Button>
              <Button
                type="submit"
                onClick={handleSignUp}
                className="header__login"
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Header;
