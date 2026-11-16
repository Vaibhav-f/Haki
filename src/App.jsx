
import {  Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ImportRepository from "./Components/ImportRepository";
import Dashboard from "./Components/Dashboard";
import LoginPage from "./Pages/LoginPage";
import SettingPage from "./Pages/SettingPage";
import AboutPage from "./Pages/AboutPage";

const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<LandingPage />}>
             <Route index element={<Dashboard />} />
             <Route path="/login" element={<LoginPage />} />
             <Route path="/setting" element={<SettingPage />} />
          <Route path="import" element={<ImportRepository />} />
          <Route path="/about" element={<AboutPage/> } />
        </Route>
      </Routes>
   
  );
};

export default App;
