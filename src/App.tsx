import { Route, Routes } from "react-router-dom";
import Button from "components/atoms/Button";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={
        <Button content="asd"/>
      }/>
    </Routes>
  );
}

export default App;
