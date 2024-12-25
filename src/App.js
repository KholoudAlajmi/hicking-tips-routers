import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import TripsList from './components/TripsList';
import TripDetail from './components/TripDetail';
import TripItem from "./components/TripItem";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Home />
      <TripsList />
      <TripDetail />
      <TripItem/>
    </div>
  );
}

export default App;
