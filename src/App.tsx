import "./App.css";
import { FC } from "react";
import Navbar from './components/Nav/Navbar'
import Content from "./components/Content/Content";


// * ❌
// * ✅

const App: FC = () => {
  return (
    <div className="App">
      <div className="position-spring">
        <Navbar />
      </div>
      <div className="content-container">
        <Content />
      </div>

    </div>
  );
};



export default App;
