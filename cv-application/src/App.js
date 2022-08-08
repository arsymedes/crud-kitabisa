import { Component } from "react";
import "./App.css";
import General from "./components/General";
import Education from "./components/Education"

class App extends Component {
  render() {
    return (
      <div className="flex flex-col items-center py-8">
        <h1 className="text-7xl font-bold mb-12">CV Application</h1>
        <ul className="steps grid-cols-[minmax(150px,_1fr)]">
          <li className="step step-primary">General</li>
          <li className="step step-primary">Educations</li>
          <li className="step">Experience</li>
          <li className="step">Review</li>
        </ul>
        <Education />
        <div className="mt-4 self-end mr-14 flex gap-2">
          <button className="btn btn-ghost">Back</button>
          <button className="btn btn-primary">Save and Continue</button>
        </div>
      </div>
    );
  }
}

export default App;
