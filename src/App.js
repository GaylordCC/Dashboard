import logo from './logo.svg';
import './App.css';
import "./components/dashboard/Dashboard";
import BodyDashboard from './components/dashboard/Dashboard';
import "./components/dashboard/__styles__/index.css";
import Button from "./components/button/Button";
import Logo from "./components/logo/Logo";
import Logo2 from "./components/logo/logo2";
import SmallContainer from "./components/container/SmallContainer";

function App() {
  return (
    <div className="App">
      <BodyDashboard />
      {/* <Logo /> */}
      {/* <Logo2 /> */}
      {/* <Button /> */}
      {/* <SmallContainer /> */}
    </div>
  );
}

export default App;
