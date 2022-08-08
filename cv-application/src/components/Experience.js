import { Component } from "react";
import { Input, Select } from "./Input"

class Experience extends Component {
  render() {
    return (
    <div className="box-border shadow-lg w-11/12 px-16 py-12 flex flex-col">
      <h2 className="font-bold text-3xl mb-6">Experience</h2>
      <form action="" className="">
        <AddSection />
      </form>
      <button type="button" className="btn btn-ghost font-bold mt-6">Add Experience</button>
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
          <Input title="Title" required="Required"/>
          <Input title="Company Name" required="Required"/>
          <Input title="Location" />
          <Select title="Employment Type" options={["Select an Option", "Full Time", "Part Time", "Self Employed", "Freelance", "Contract", "Internship", "Apprenticeship"]}/>
          <Input title="Start Year" desc="Example: 2022"/>
          <Input title="End Year (or expected)" desc="Example: 2026" />
        </fieldset>
      </div>
    )
  }
}

export default Experience;
