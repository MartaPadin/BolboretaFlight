<<<<<<< HEAD
<<<<<<< HEAD
import FormPassenger from '../components/FormaPassenger/FormPassenger';
import {
  AdvancedSearchScreen,
  DatosUsuario,
  ProfileScreen,
  HomeRound,
  HomeScreen,
  RecoveryPass,
  RegisterScreen,
  HomeMultiple,
  EditPass,
  ResetPassScreen,
} from '../page';

const routes = [
  { name: 'home', path: '/', component: <HomeScreen /> },
  { name: 'recover', path: '/recover', component: <RecoveryPass /> },
  { name: 'register', path: '/register', component: <RegisterScreen /> },
  {
    name: 'search',
    path: '/search/:origin/:destination/:departureDate/:adults',
    component: <AdvancedSearchScreen />,
  },
  {
    name: 'searchAdvance',
    path: '/return/search/:origin/:destination/:departureDate/:returnDate/:adults',
    component: <AdvancedSearchScreen />,
  },
  { name: 'user', path: '/user', component: <ProfileScreen /> },
  { name: 'passenger', path: '/passenger', component: <FormPassenger /> },
  { name: 'editpass', path: '/user/:iduser/editpass', component: <EditPass /> },
  { name: 'resetpass', path: '/resetpass', component: <ResetPassScreen /> },
  { name: 'edit', path: '/user/:iduser/edit', component: <DatosUsuario /> },
  { name: 'return', path: '/return', component: <HomeRound /> },
  { name: 'multiple', path: '/multiple', component: <HomeMultiple /> },
=======
=======
>>>>>>> 84ebbddc9b3c83cc59ec6e36a6fadb9a8b6d2920
import {
  AdvancedSearchScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  RegisterScreen,
} from "../page";
const routes = [
  { name: "home", path: "/", component: <HomeScreen /> },
  { name: "login", path: "/login", component: <LoginScreen /> },
  { name: "register", path: "/register", component: <RegisterScreen /> },
  { name: "search", path: "/search", component: <AdvancedSearchScreen /> },
  { name: "user", path: "/user/:iduser", component: <ProfileScreen /> },
<<<<<<< HEAD
>>>>>>> Arreglado enrutado
=======
>>>>>>> 84ebbddc9b3c83cc59ec6e36a6fadb9a8b6d2920
];

export default routes;
