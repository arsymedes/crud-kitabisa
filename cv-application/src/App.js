import { Component } from "react";
import uniqid from "uniqid";
import "./App.css";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Review from "./components/Review";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 2,
      tabs: ["General", "Education", "Experience", "Review"],
      general: {
        fullName: "",
        gender: "",
        phoneNumber: "",
        email: "",
        dateOfBirth: "",
        nationality: "",
        idNumber: "",
        address: "",
      },
      educations: [],
      education: {
        schoolName: "",
        fieldOfStudy: "",
        degree: "",
        grade: "",
        startYear: "",
        endYear: "",
      },
      experiences: [],
      experience: {
        title: "",
        companyName: "",
        location: "",
        employmentType: "",
        startYear: "",
        endYear: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, category) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const smallCategory = category.toLowerCase();

    this.setState((prevState) => ({
      [smallCategory]: {
        ...prevState[smallCategory],
        [name]: value,
      },
    }));
  }

  steps() {
    const { tab, tabs } = this.state;
    const newList = [];
    for (let i = 0; i < tabs.length; i += 1) {
      let classes = "step";
      if (i <= tab) classes += " step-primary";
      newList.push(
        <li key={uniqid()} className={classes}>
          {tabs[i]}
        </li>
      );
    }
    return <ul className="steps grid-cols-[minmax(150px,_1fr)]">{newList}</ul>;
  }

  mainContent() {
    if (this.state.tab === 0)
      return (
        <General handleChange={this.handleChange} form={this.state.general} />
      );
    if (this.state.tab === 1)
      return (
        <Education
          handleChange={this.handleChange}
          form={this.state.education}
        />
      );
    if (this.state.tab === 2)
      return (
        <Experience
          handleChange={this.handleChange}
          form={this.state.experience}
        />
      );
    if (this.state.tab === 3)
      return <Review handleChange={this.handleChange} />;
  }

  render() {
    return (
      <div className="flex flex-col items-center py-8">
        <h1 className="text-7xl font-bold mb-12">CV Application</h1>
        {this.steps()}
        {this.mainContent()}
        <div className="mt-4 self-end mr-14 flex gap-2">
          <button className="btn btn-ghost">Back</button>
          <button className="btn btn-primary">Save and Continue</button>
        </div>
      </div>
    );
  }
}

export default App;
