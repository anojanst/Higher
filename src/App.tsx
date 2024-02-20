import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicLayout } from "./layouts/layouts";
import { FindCourses, Home, Institutes } from "./views";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/find-courses" element={<FindCourses />} />
          <Route path="/institutes" element={<Institutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
