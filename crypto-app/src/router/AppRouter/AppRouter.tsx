import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../modules/home";

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
