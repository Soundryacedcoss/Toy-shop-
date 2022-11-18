import React, { useContext, useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { Caursol } from "./Caursol";
import { ProductView } from "./ProductView";
import img1 from "./image/logotoy.png";
import { Link } from "react-router-dom";
import { DataContext } from "./App";
import { Footer } from "./Footer";
export const Navbar = () => {
  const cartlength = useContext(DataContext);
  const [WelcomeMsg, setWelcomeMsg] = useState("");
  console.log(cartlength.cartArr.length);
  // Here i am checking that the user ois loged in or not
  const [userdataname, setUserdataname] = useState([]);
  let userlogdata = localStorage.getItem("data", userdataname);
  let userlogdata1 = JSON.parse(userlogdata);
  //Log out function ***************************************************************
  const SignOutHandler = () => {
    localStorage.removeItem("data");
    setWelcomeMsg("welcome guest");
  };

  useEffect(() => {
    if (userlogdata1 === null) {
      setWelcomeMsg(" Guest");
    } else {
      setWelcomeMsg(userlogdata1[0].name);
    }
  }, [WelcomeMsg]);

  return (
    <>
      <div className="NavbarPage">
        <div className={style.Flex}>
          <img className={style.LogoImg} src={img1} alt="" />
          <h2 className={style.StoreName}>welcome,{WelcomeMsg}</h2>
          <div class={style.topnav}>
            <Link to="/">Home</Link>
            <Link onClick={SignOutHandler}>Sign out</Link>
            <Link to="/Cart">Cart {cartlength.cartArr.length}</Link>
            <Link to="/Signup">Sign-Up</Link>
            <Link to="/Login">Login</Link>
          </div>
        </div>
      </div>
      <Caursol />
      <ProductView />
      <Footer />
    </>
  );
};
