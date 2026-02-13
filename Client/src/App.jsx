import "./App.css";
import Fetch from "./components/Fetch";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <Fetch />
      </div>
    </div>
  );
}
