import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT ALL Components
import Homepage from "../../pages/Homepage";
import Exercise1 from "../../pages/Exercise1";
import Exercise2 from "../../pages/Exercise2";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
        </Routes>
      </Router>
    </>
  );
};
export default Routers;
