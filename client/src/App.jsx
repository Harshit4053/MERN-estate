import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
     
        <Route element={<PrivateRoute />} >
         <Route path="/profile" element={<Profile />} />
         <Route path="/create-listing" element={<CreateListing />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
