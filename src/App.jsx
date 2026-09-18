import ClockHeading from "./components/ClockHeading.jsx";
import ClockSlogan from "./components/ClockSlogan.jsx";
import ClockTime from "./components/ClockTime.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <ClockTime />
    </center>
  );
}

export default App;
