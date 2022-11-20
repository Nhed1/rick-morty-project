import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Characters } from "../pages/Characters/Characters";
import { Home } from "../pages/Home";
import { NotFoundError } from "../pages/NotFoundError";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </BrowserRouter>
  );
}
