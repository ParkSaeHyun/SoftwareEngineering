import React from 'react';
import LoginPage from "./page/user/LoginPage";
import RegisterPage from "./page/user/RegisterPage";
import { Routes, Route, Router } from "react-router";
import MainPage from "./page/user/MainPage";
import FindMyPwPage from "./page/user/FindMyPwPage";
import CategoryList from "./page/cloth/CategoryList";
import ClothList from "./page/cloth/ClothList";
import EditCloth from "./page/cloth/EditCloth";
import EditUserPage from "./page/user/EditUser";
import TrashBin from './page/cloth/TrashBin'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/login";



function App() {
  const mode = true;
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user)
    {
      dispatch(login(user))
    }
  },
  [])
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element = {<RegisterPage/>}/>
      <Route path="/findmypw" element = {<FindMyPwPage/>}/>
      <Route path="/:weather" element = {<CategoryList />}/>
      <Route path="/editcloth" element= {<EditCloth />} /> 
      <Route path="/clothlist" element = {<ClothList name = "안녕" />}/>
      <Route path="/editUser" element = {<EditUserPage />}/>
      <Route path="/trashbin" element = {<TrashBin /> } />
    </Routes>
    </>
  );
}

export default App;
