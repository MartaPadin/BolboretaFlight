<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import '../App.css';
import routes from './routes';
import {
  AdvancedSearchScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  RegisterScreen,
} from '../page';
import StepperForm from '../components/StepperForm/StepperForm';
import StepForm from '../components/StepForm/StepForm';
import Itinerary from '../components/StepperForm/Itinerary/Itinerary';
import SeatChoice from '../components/StepperForm/SeatChoice/SeatChoice';
import FormPassenger from "../components/FormaPassenger/FormPassenger";
import Header from "../components/ui/header/header";
import HomeRound from '../page/HomeRound';
import HomeMultiple from '../page/HomeMultiple';
import { TokencontextProvider } from "../context/TokenContext";

import Footer from "../components/ui/Footer/Footer";
=======
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import routes from "./routes";
//import App from "../App";
>>>>>>> Arreglado enrutado

const Routing = () => {
  return (
    <Router>
      <TokencontextProvider>
        <Header></Header>
        <main>
          <nav>
            <ul>
              {routes.map((route) => {
                return (
                  <li key={route.path}>
                    <Link to={route.path}>{route.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                ></Route>
              );
            })}
<<<<<<< HEAD
          </Routes>
        </main>
        <Footer />
      </TokencontextProvider>
=======
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              ></Route>
            );
          })}
        </Routes>
      </div>
>>>>>>> Arreglado enrutado
    </Router>
  );
};

export default Routing;
