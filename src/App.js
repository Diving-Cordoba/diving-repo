import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./css/app.css"
function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

