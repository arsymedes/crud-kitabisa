import { Component } from "react";
import { Input, Select } from "./Input";

class Experience extends Component {
  modalPopup() {
    return (
      <div className="modal">
        <form action="" className="modal-box max-w-none w-11/12 px-16 py-12">
          <AddSection
            form={this.props.form}
            handleChange={this.props.handleChange}
            category="Experience"
          />
          <div className="modal-action">
            <label
              htmlFor="experience-modal"
              onClick={() => this.props.addRecord("Experience")}
              className="btn btn-secondary"
            >
              Add
            </label>
            <label htmlFor="experience-modal" className="btn btn-ghost">
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
        category="Experience"
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
        <h2 className="font-bold text-3xl mb-6">Experience</h2>
        <form action="" className="">
          {this.iterator()}
        </form>
        <label
          htmlFor="experience-modal"
          className="btn btn-ghost font-bold mt-6 modal-button"
        >
          Add Experience
        </label>
        <input type="checkbox" id="experience-modal" className="modal-toggle" />
        {this.modalPopup()}
      </div>
    );
  }
}

class AddSection extends Component {
  render() {
    const category = "Experience";

    return (
      <div>
        <h3 className="text-lg font-semibold my-2">Experience 1</h3>
        <fieldset className="grid grid-cols-2 gap-x-16">
          <Input
            id={this.props.id}
            title="Title"
            required="Required"
            name="title"
            value={this.props.form.title}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Input
            id={this.props.id}
            title="Company Name"
            required="Required"
            name="companyName"
            value={this.props.form.companyName}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Input
            id={this.props.id}
            title="Location"
            name="location"
            value={this.props.form.location}
            category={category}
            handleChange={this.props.handleChange}
          />
          <Select
            id={this.props.id}
            title="Employment Type"
            options={[
              "Select an Option",
              "Full Time",
              "Part Time",
              "Self Employed",
              "Freelance",
              "Contract",
              "Internship",
              "Apprenticeship",
            ]}
            name="employmentType"
            value={this.props.form.employmentType}
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

export default Experience;
