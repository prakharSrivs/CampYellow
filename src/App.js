import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import './App.css';
import Form from "./Components/Form/Form";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
        <Route path='/form' element={<Form/>} />
        <Route path='/not-found' element={<Error />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
