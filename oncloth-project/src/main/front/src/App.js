import LoginPage from "./page/user/LoginPage";
import RegisterPage from "./page/user/RegisterPage";
import { Routes, Route, Router } from "react-router";
import MainPage from "./page/user/MainPage";
import FindMyPwPage from "./page/user/FindMyPwPage";

function App() {
  const mode = false;
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage mode={mode} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element = {<RegisterPage/>} />
      <Route path="/findmypw" element = {<FindMyPwPage/>}/>
    </Routes>
    </>
  );
}

export default App;
