import React, {useState, useEffect, useContext} from 'react';
import ItemsList from '../ItemsList';
import InputForm from '../InputForm';
import ItemsService from "../../services/ItemsService";
import {useHistory} from 'react-router-dom';
import AuthContext from "../../context/authContext";

function Header(props) {
  const authContext = useContext(AuthContext);
  console.log(window.location.pathname)
  return (
      <div style={{backgroundColor: authContext.isAuth? 'red' : 'blue', width: 300, height: 300} }>
      </div>
  );
}

export default Header;
