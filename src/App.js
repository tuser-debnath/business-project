import { Route, Routes } from "react-router-dom";
import "./App.css";
import Service from "../src/Pages/Service/Service";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Contacts from "./Pages/Contacts/Contacts";
import Registrations from "./Pages/Registrations/Registrations";
import SignInPage from "./Pages/SignInPage/SignInPage";
import RequireAuth from "./Hooks/RequireAuth/RequireAuth";
import Error from "./Pages/Error/Error";
// import Logo from "./components/Logo/Logo";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <HeaderTwo /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blog />
            </RequireAuth>
          }
        ></Route>
        <Route path="/reg" element={<Registrations />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
