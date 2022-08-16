import { Component } from "react";
import { Input, Radio } from "./Input";

class General extends Component {
  render() {
    const category = "General";
    return (
      <div className={`box-border shadow-lg w-11/12 px-16 py-12 ${this.props.isDisabled ? "opacity-80": ""}`}>
        <h2 className="font-bold text-3xl mb-6">General</h2>
        <form action="">
          <fieldset className="grid grid-cols-2 gap-x-16" disabled={this.props.isDisabled}>
            <Input
              title="Full Name on ID"
              name="fullName"
              required="Required"
              value={this.props.form.fullName}
              category={category}
              handleChange={this.props.handleChange}
            />
            <Radio
              title="Gender"
              name="gender"
              options={["Male", "Female"]}
              value={this.props.form.gender}
              category={category}
              handleChange={this.props.handleChange}
            />
            <Input
              title="Phone Number"
              required="Required"
              name="phoneNumber"
              value={this.props.form.phoneNumber}
              category={category}
              handleChange={this.props.handleChange}
            />
            <Input
              title="Email Address"
              required="Required"
              name="email"
              value={this.props.form.email}
              category={category}
              handleChange={this.props.handleChange}
            />
            <Input
              title="Date of Birth"
              required="Required"
              desc="Date Format: DD-MM-YYYY"
              name="dateOfBirth"
              value={this.props.form.dateOfBirth}
              category={category}
              handleChange={this.props.handleChange}
            />
            <Input
              title="Nationality"
              required="Required"
              name="nationality"
              value={this.props.form.nationality}
              category={category}
              handleChange={this.props.handleChange}
            />
            <Input
              title="ID Number"
              required="Required"
              desc="For Foreigners, Use Passport ID"
              name="idNumber"
              value={this.props.form.idNumber}
              category={category}
              handleChange={this.props.handleChange}
            />
            <Input
              title="Current Address"
              required="Required"
              desc="Includes City Name and Country of Residence"
              name="address"
              value={this.props.form.address}
              category={category}
              handleChange={this.props.handleChange}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default General;
