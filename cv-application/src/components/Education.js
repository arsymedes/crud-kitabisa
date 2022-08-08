import { Component } from "react";
import {Input, Radio} from "./Input"

class Education extends Component {
  render() {
    return (
    <div className="box-border shadow-lg w-11/12 px-16 py-12 flex flex-col">
      <h2 className="font-bold text-3xl mb-6">Educations</h2>
      <form action="" className="">
        <AddSection />
      </form>
      <button className="btn btn-ghost font-bold mt-6">Add School</button>
    </div>
    );
  }
}

class AddSection extends Component {
  render() {
    return(
      <div>
        <h3 className="text-lg font-semibold my-2">School 1</h3>
        <fieldset className="grid grid-cols-2 gap-x-16">
          <Input title="School Name" required="Required"/>
          <Input title="Field of Study" />
          <Input title="Degree" />
          <Input title="Grade" />
          <Input title="Start Year" desc="Example: 2022"/>
          <Input title="End Year (or expected)" desc="Example: 2026" />
        </fieldset>
      </div>
    )
  }
}

export default Education;
