import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { auth } from "./Firebase";
import Header from "./Header";
import Home from "./Home";
import MainBody from "./MainBody";

function App() {
  const [user,setUser]=useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        setUser(authUser)
      }else{
        setUser(null)
      }
    })
  },[user])

  console.log("user",user)
  return (
    <div className="app">
      <Router>
        <Header user={user} className="hheader" />
        <Switch>
          <Route path="/">{user ? <MainBody/> : <Home/>}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
