import { Component } from "react";
import {Input, Radio} from "./Input"

class General extends Component {
  render() {
    return (
    <div className="box-border shadow-lg w-11/12 px-16 py-12">
      <h2 className="font-bold text-3xl mb-6">General</h2>
      <form action="" className="grid grid-cols-2 gap-x-16">
        <Input title="Full Name on ID" required="Required"/>
        <fieldset className="flex gap-4">
          <legend className="text-sm mb-2">Gender</legend>
          <Radio option="Male"/>
          <Radio option="Female"/>
        </fieldset>
        <Input title="Phone Number" required="Required"/>
        <Input title="Email Address" required="Required"/>
        <Input title="Date of Birth" required="Required" desc="Date Format: DD-MM-YYYY"/>
        <Input title="Nationality" required="Required"/>
        <Input title="ID Number" required="Required" desc="For Foreigners, Use Passport ID"/>
        <Input title="Current Address" required="Required" desc="Includes City Name and Country of Residence"/>
      </form>
    </div>
    );
  }
}

export default General;
