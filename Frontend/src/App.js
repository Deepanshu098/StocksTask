import {BrowserRouter as  Router, Routes , Route} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import StockMarket from "./components/StockMarket";

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<StockMarket/>}></Route>
            </Routes>
        </Router>
    )
}

export default App;