import { Component } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

class Review extends Component {
  render() {
    return (
      <div className="w-full flex flex-col items-center">
        <General handleChange={this.props.handleChange} form={this.props.form} />
        <Education
          handleChange={this.props.handleChange}
          handleListChange={this.props.handleListChange}
          addRecord={this.props.addRecord}
          form={this.props.form}
          forms={this.props.forms}
        />
        <Experience
          handleChange={this.props.handleChange}
          handleListChange={this.props.handleListChange}
          addRecord={this.props.addRecord}
          form={this.props.form}
          forms={this.props.forms}
        />
      </div>
    );
  }
}

export default Review;
