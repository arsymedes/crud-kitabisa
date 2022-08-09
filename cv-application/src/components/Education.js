import { Component } from "react";
import { Input } from "./Input";

class Education extends Component {
  render() {
    return (
      <div className="box-border shadow-lg w-11/12 px-16 py-12 flex flex-col">
        <h2 className="font-bold text-3xl mb-6">Educations</h2>
        <form action="" className="">
          <AddSection form={this.props.form} handleChange={this.props.handleChange} />
        </form>
        <button type="button" className="btn btn-ghost font-bold mt-6">
          Add Education
        </button>
      </div>
    );
  }
}

class AddSection extends Component {
  render() {
    const category = "Education";
    return (
      <div>
        <h3 className="text-lg font-semibold my-2">School 1</h3>
        <fieldset className="grid grid-cols-2 gap-x-16">
          <Input
            title="School Name"
            required="Required"
            name="schoolName"
            value={this.props.form.schoolName}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Input
            title="Field of Study"
            name="fieldOfStudy"
            value={this.props.form.fieldOfStudy}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Input
            title="Degree"
            name="degree"
            value={this.props.form.degree}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Input
            title="Grade"
            name="grade"
            value={this.props.form.grade}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Input
            title="Start Year"
            desc="Example: 2022"
            name="startYear"
            value={this.props.form.startYear}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Input
            title="End Year (or expected)"
            desc="Example: 2026"
            name="endYear"
            value={this.props.form.endYear}
            category={category}
            handleChange={this.props.handleChange}
          />
        </fieldset>
      </div>
    );
  }
}

export default Education;
