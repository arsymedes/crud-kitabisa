import {Component} from "react"

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

export {Input, Radio}