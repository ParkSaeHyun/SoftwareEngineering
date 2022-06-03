import LoginPage from "./page/user/LoginPage";
import RegisterPage from "./page/user/RegisterPage";
import { Routes, Route, Router } from "react-router";
import MainPage from "./page/user/MainPage";
import FindMyPwPage from "./page/user/FindMyPwPage";
import CategoryList from "./page/cloth/CategoryList";
import ClothList from "./page/cloth/ClothList";
import EditCloth from "./page/cloth/EditCloth";

function App() {
  const mode = true;
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage mode={mode}/>} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element = {<RegisterPage/>}/>
      <Route path="/findmypw" element = {<FindMyPwPage/>}/>
      <Route path="/:weather" element = {<CategoryList />}/>
      <Route path="/editcloth" element= {<EditCloth />} /> 
    </Routes>
    </>
  );
}

export default App;
