import { Component } from "react";
import { Input } from "./Input";

class Education extends Component {
  modalPopup() {
    return (
      <div className="modal">
        <form action="" className="modal-box max-w-none w-11/12 px-16 py-12">
          <AddSection
            form={this.props.form}
            handleChange={this.props.handleChange}
            category="Education"
          />
          <div className="modal-action">
            <label
              htmlFor="education-modal"
              onClick={() => this.props.addRecord("Education")}
              className="btn btn-secondary"
            >
              Add
            </label>
            <label htmlFor="education-modal" className="btn btn-ghost">
              Cancel
            </label>
          </div>
        </form>
      </div>
    );
  }

  iterator() {
    const newList = this.props.forms.map((element) => (
      <AddSection
        form={element}
        category="Education"
        handleChange={this.props.handleListChange}
        key={element.id}
        id={element.id}
      />
    ));
    return newList
  }

  render() {
    return (
      <div className="box-border shadow-lg w-11/12 px-16 py-12 flex flex-col">
        <h2 className="font-bold text-3xl mb-6">Educations</h2>
        <form action="" className="">
          {this.iterator()}
        </form>
        <label
          htmlFor="education-modal"
          className="btn btn-ghost font-bold mt-6 modal-button"
        >
          Add Education
        </label>
        <input type="checkbox" id="education-modal" className="modal-toggle" />
        {this.modalPopup()}
      </div>
    );
  }
}

class AddSection extends Component {
  render() {
    const category = this.props.category;
    return (
      <div>
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold my-2">School 1</h3>
          <button type="button" className="btn btn-outline btn-ghost btn-square"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>
        <fieldset className="grid grid-cols-2 gap-x-16">
          <Input
            id={this.props.id}
            title="School Name"
            required="Required"
            name="schoolName"
            value={this.props.form.schoolName}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Input
            id={this.props.id}
            title="Field of Study"
            name="fieldOfStudy"
            value={this.props.form.fieldOfStudy}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Input
            id={this.props.id}
            title="Degree"
            name="degree"
            value={this.props.form.degree}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Input
            id={this.props.id}
            title="Grade"
            name="grade"
            value={this.props.form.grade}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Input
            id={this.props.id}
            title="Start Year"
            desc="Example: 2022"
            name="startYear"
            value={this.props.form.startYear}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Input
            id={this.props.id}
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
