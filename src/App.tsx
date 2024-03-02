import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicLayout } from "./layouts/layouts";
import { FindCourses, Home, Institutes } from "./views";
import {
  FIND_COURSE_URL,
  HOME_URL,
  INSTITUTES_URL,
} from "./constants/urlConstants";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={HOME_URL} element={<Home />} />
          <Route path={FIND_COURSE_URL} element={<FindCourses />} />
          <Route path={INSTITUTES_URL} element={<Institutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
