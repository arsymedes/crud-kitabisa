import { Component } from "react"
import General from "./General";
import Education from "./Education"
import Experience from "./Experience";


class Review extends Component {
  render() {
    return(
      <div className="w-full flex flex-col items-center">
        <General />
        <Education />
        <Experience />
      </div>
    )
  }
}

export default Review