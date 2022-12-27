import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./components/Navbar";
import { Footer } from "./components/footer";
import { Route, Routes } from "react-router-dom";
import BannerCarousel from "./components/carousel";
import EventInfo from "./components/eventInfo";
import LoginPage from "./components/login";
import SignPage from "./components/signUp";
import Registration from "./components/registration";
import AdminHome from "./components/AdminHome";
import { StudProfile } from "./components/studentprofile";
import AdminEventInfo from "./components/AdminEventInfo";
import Search from "./components/search";
import UserState from "./context/user/UserState";
import EventState from "./context/event/EventState";

function ColorSchemesExample() {
  return (
    <div className="App">

    <UserState>
      <EventState>

      <NavScrollExample />

      <Routes>
        <Route
          exact
          path="/home"
          element={<BannerCarousel></BannerCarousel>}
        ></Route>

        <Route path="/event/:eid" element={<EventInfo />}></Route>

        <Route path="/" element={<LoginPage />}></Route>

        <Route path="/signup" element={<SignPage />}></Route>

        <Route path="/registration" element={<Registration />}></Route>

        <Route path="/admin" element={<AdminHome />}></Route>

        <Route path="/adminevent" element={<AdminEventInfo />}></Route>

        <Route path="/profile" element={<StudProfile />} />

        <Route path="/search" element={<Search />} />
      </Routes>

      <Footer />

      </EventState>
      </UserState>

    </div>
  );
}

export default ColorSchemesExample;
