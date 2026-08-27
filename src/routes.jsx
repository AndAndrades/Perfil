import Inicio from "./pages/Inicio.page";

const routes = [
  { path: "/", component: Inicio },
  { path: "/Perfil", component: Inicio },
  { path: "/Perfil/*", component: Inicio },
  { path: "*", component: Inicio },
];

export default routes;