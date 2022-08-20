import { Component } from "react";

class Review extends Component {
  renderExperience() {
    const {experiences} = this.props.state
    return experiences.map((experience) => (
      <li>
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">{experience.companyName}</h3>
          <div className="text-md font-bold">{experience.location}</div>
        </div>
        <div className="flex justify-between">
          <h4 className="text-md font-bold">{experience.title}</h4>
          <div className="text-md font-bold">{experience.startYear} - {experience.endYear}</div>
        </div>
        <ul className="list-disc ml-10">
          {experience.points.map((element) => <li>{element}</li>)}
        </ul>
      </li>
    ))
  }

  renderEducation() {
    const {educations} = this.props.state
    return educations.map((education) => (
      <li>
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">{education.schoolName}</h3>
          <div className="text-md font-bold">{education.startYear} - {education.endYear}</div>
        </div>
        <div className="flex justify-between">
          <h4 className="text-md font-bold">{education.degree} degree in {education.fieldOfStudy}</h4>
          <div className="text-md font-bold">{education.grade? "GPA: ": ""} {education.grade}</div>
        </div>
      </li>
    ))
  }

  render() {
    const { general } = this.props.state;
    return (
      <div className="box-border shadow-lg w-[48rem] aspect-[1/1.414] mt-8 p-16 flex flex-col items-center gap-5">
        <h1 className="text-4xl font-bold">{general.fullName.toUpperCase()}</h1>
        <ul className="list-disc flex gap-7">
          <li className="list-none">{general.address}</li>
          <li>{general.email}</li>
          <li>{general.phoneNumber}</li>
        </ul>
        <div className="w-full flex flex-col">
          <h2 className="text-xl font-bold mb-2 border-b-2 border-black">
            PROFESSIONAL EXPERIENCE
          </h2>
          <ul className="flex flex-col gap-4">
            {this.renderExperience()}
          </ul>
        </div>
        <div className="w-full flex flex-col">
          <h2 className="text-xl font-bold mb-2 border-b-2 border-black">
            EDUCATION
          </h2>
          <ul className="flex flex-col gap-4">
            {this.renderEducation()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Review;
