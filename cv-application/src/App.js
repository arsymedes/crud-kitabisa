import { Component } from "react";
import "./App.css";
import General from "./components/General";

class App extends Component {
  render() {
    return (
      <div className="flex flex-col items-center py-8 gap-8">
        <h1 className="text-3xl font-bold">CV Application</h1>
        <ul className="steps grid-cols-[minmax(150px,_1fr)]">
          <li className="step step-primary">General</li>
          <li className="step step-primary">Educations</li>
          <li className="step">Experience</li>
          <li className="step">Review</li>
        </ul>
        <General />
      </div>
    );
  }
}

export default App;
