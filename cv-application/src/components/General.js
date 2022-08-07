import { Component } from "react";

class General extends Component {
  render() {
    return (
    <div className="shadow-lg box-border w-11/12 grid grid-cols-2 px-16 py-12 gap-x-16">
      <Input title="Full Name on ID" required="Required"/>
      <fieldset className="flex gap-4">
        <legend>Gender</legend>
        <Radio option="Male"/>
        <Radio option="Female"/>
      </fieldset>
      <Input title="Phone Number" required="Required"/>
      <Input title="Email Address" required="Required"/>
      <Input title="Date of Birth" required="Required" desc="Date Format: DD-MM-YYYY"/>
      <Input title="Nationality" required="Required"/>
      <Input title="ID Number" required="Required" desc="For Foreigners, Use Passport ID"/>
      <Input title="Current Address" required="Required" desc="Includes City Name and Country of Residence"/>
    </div>
    );
  }
}

class Input extends Component {
  render() {
    return(
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">{this.props.title}</span>
          <span className="label-text-alt">{this.props.required}</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full h-9 input-primary" />
        <label className="label">
          <span className="label-text-alt">{this.props.desc}</span>
        </label>
      </div>
    )
  }
}

class Radio extends Component {
  render() {
    return(
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <input type="radio" name="radio-6" className="radio checked:bg-primary" />
          <span className="label-text">{this.props.option}</span> 
        </label>
      </div>
    )
  }
}

export default General;
