import { Routes, Route } from "react-router-dom";
import routes from "./routes";

function AppRoutes() {
    return (
        <Routes>
            {routes.map(({ path, component: Component }) => (
                <Route
                    key={path}
                    path={path}
                    element={<Component />}
                />
            ))}
        </Routes>
    );
}

export default AppRoutes;