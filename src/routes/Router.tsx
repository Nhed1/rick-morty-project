import { Routes, Route } from "react-router-dom";
import { Characters } from "../pages/Characters/Characters";
import { Home } from "../pages/Home";
import { NotFoundError } from "../pages/NotFoundError";
import { SpecificCharacter } from "../pages/SpecificCharacter/SpecificCharacter";

export function Router() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/characters/:id" element={<SpecificCharacter />} />
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
}
