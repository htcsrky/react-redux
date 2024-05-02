import "./App.css";
import CounterRedux from "./Component/CounterRedux";
import CountryRedux from "./Component/ProductListRedux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailProdutc from "./Component/DetailProdutc";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CountryRedux />} />
          <Route path="/detail/:id" element={<DetailProdutc />} />
        </Routes>
      </Router>
      <CounterRedux />
    </div>
  );
}

export default App;
