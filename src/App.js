import "./App.css";
import { WeatherProvider } from "./context/WeatherProvider";
import MainCard from "./components/UI/MainCard";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <MainCard />
      </WeatherProvider>
    </div>
  );
}

export default App;
