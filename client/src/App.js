import Register from './components/Register'
import Login from "./components/Login";
import { BrowserRouter,  Routes,  Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Login/>} exact ></Route>
					<Route path="/login" element={<Login/>}></Route>
					<Route path="/register" element={<Register/>}></Route>
					<Route path="*">Page not found</Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
