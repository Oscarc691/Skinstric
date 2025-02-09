import Home from './components/Home';
import AOS from "aos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

AOS.init();
function App() {
  return (
    <Router>
<Routes>
<Route path="/" element={<Home />} />
</Routes>
    </Router>
    );
}

export default App;
