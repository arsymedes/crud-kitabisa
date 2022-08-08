import {Component} from "react"
import uniqid from "uniqid"


class Input extends Component {
  render() {
    return(
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">{this.props.title}</span>
          <span className="label-text-alt">{this.props.required}</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full h-9 input-primary font-semibold" />
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

class Select extends Component {
  iterator(list) {
    const newList = list.map((element) => <option key={element} value={element}>{element}</option>)
    newList[0] = <option key={uniqid()} value={list[0]} disabled >{list[0]}</option>
    return newList
  }

  render() {
    return(
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">{this.props.title}</span>
          <span className="label-text-alt">{this.props.required}</span>
        </label>
        <select className="select min-h-6 h-9 select-primary w-full">
          {this.iterator(this.props.options)}
        </select>
        <label className="label">
          <span className="label-text-alt">{this.props.desc}</span>
        </label>
      </div>
    )
  }
}

export {Input, Radio, Select}