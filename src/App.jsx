import { Navbar } from "./Components/Navbar";

// for router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
