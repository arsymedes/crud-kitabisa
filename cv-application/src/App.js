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
      tab: 0,
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
        id: uniqid(),
        schoolName: "",
        fieldOfStudy: "",
        degree: "",
        grade: "",
        startYear: "",
        endYear: "",
      },
      experiences: [],
      experience: {
        id: uniqid(),
        title: "",
        companyName: "",
        location: "",
        employmentType: "Select an Option",
        startYear: "",
        endYear: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.deleteListChange = this.deleteListChange.bind(this)
    this.addRecord = this.addRecord.bind(this);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
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

  handleListChange(event, category, id) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (category === "Education") {
      let list = [...this.state.educations];
      let index = list.findIndex((el) => el.id === id);
      list[index] = {
        ...list[index],
        [name]: value,
      };
      this.setState({ educations: list });
    } else if (category === "Experience") {
      let list = [...this.state.experiences];
      let index = list.findIndex((el) => el.id === id);
      list[index] = {
        ...list[index],
        [name]: value,
      };
      this.setState({ experiences: list });
    }
  }

  deleteListChange(category, id) {
    if (category === "Education") {
      let list = this.state.educations.filter((el) => el.id !== id);
      this.setState({ educations: list });
    } else if (category === "Experience") {
      let list = this.state.experiences.filter((el) => el.id !== id);
      this.setState({ experiences: list });
    }
  }

  addRecord(type) {
    if (type === "Education") {
      this.setState((state) => ({
        education: {
          id: uniqid(),
          schoolName: "",
          fieldOfStudy: "",
          degree: "",
          grade: "",
          startYear: "",
          endYear: "",
        },
        educations: [...state.educations, state.education],
      }));
    } else if (type === "Experience") {
      this.setState((state) => ({
        experience: {
          id: uniqid(),
          title: "",
          companyName: "",
          location: "",
          employmentType: "",
          startYear: "",
          endYear: "",
        },
        experiences: [...state.experiences, state.experience],
      }));
    }
  }

  next() {
    this.setState((prevState) => ({ tab: prevState.tab + 1 }));
  }

  back() {
    if (this.state.tab > 0) {
      this.setState((prevState) => ({ tab: prevState.tab - 1 }));
    }
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
          handleListChange={this.handleListChange}
          deleteListChange={this.deleteListChange}
          addRecord={this.addRecord}
          form={this.state.education}
          forms={this.state.educations}
        />
      );
    if (this.state.tab === 2)
      return (
        <Experience
          handleChange={this.handleChange}
          handleListChange={this.handleListChange}
          deleteListChange={this.deleteListChange}
          addRecord={this.addRecord}
          form={this.state.experience}
          forms={this.state.experiences}
        />
      );
    if (this.state.tab === 3)
      return (
        <Review
          handleChange={this.handleChange}
          handleListChange={this.handleListChange}
          addRecord={this.addRecord}
          form={this.state.general}
          educationForms={this.state.educations}
          experienceForms={this.state.experiences}
        />
      );
  }

  render() {
    return (
      <div className="flex flex-col items-center py-8">
        <h1 className="text-7xl font-bold mb-12">CV Application</h1>
        {this.steps()}
        {this.mainContent()}
        <div className="mt-4 self-end mr-14 flex gap-2">
          <button className="btn btn-ghost" onClick={this.back}>
            Back
          </button>
          <button className="btn btn-primary" onClick={this.next}>
            Save and Continue
          </button>
        </div>
      </div>
    );
  }
}

export default App;
