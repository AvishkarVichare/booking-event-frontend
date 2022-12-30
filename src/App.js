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
import Deparment from "./components/Deparment";
import UserState from "./context/user/UserState";
import EventState from "./context/event/EventState";
import AddEvent from "./components/AddEvent";
import RazorpayPayment from "./components/RazorpayPayment";
import EventType from "./components/EventType";
import Search from "./components/Search";

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

        <Route path="/adminevent/:eid" element={<AdminEventInfo />}></Route>

        <Route path="/profile" element={<StudProfile />} />

        <Route path="/department/:filter" element={<Deparment />} />
        <Route path="/type/:filter" element={<EventType />} />

        <Route path="/addevent" element={<AddEvent />}></Route>
        <Route path="/search/:search" element={<Search />}></Route>

        {/* <Route path="/payment/:eid" element={<RazorpayPayment />}></Route> */}


      </Routes>

      <Footer />

      </EventState>
      </UserState>

    </div>
  );
}

export default ColorSchemesExample;
