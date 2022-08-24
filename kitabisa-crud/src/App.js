import { Component } from "react";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [
        {
          title: "Create React App",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lorem ut massa vulputate, eu consectetur lectus pharetra.",
          id: uniqid(),
        },
        {
          title: "Daftar Magang di Kita Bisa",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lorem ut massa vulputate, eu consectetur lectus pharetra.",
          id: uniqid(),
        },
        {
          title: "Belajar untuk Persiapan Kuliah Fisika",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lorem ut massa vulputate, eu consectetur lectus pharetra.",
          id: uniqid(),
        },
      ],
      todo: {
        title: "",
        desc: "",
        id: uniqid(),
      },
      edit: ""
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(event) {
    this.setState((state) => ({
      todo: {
        title: "",
        desc: "",
        id: uniqid(),
      },
      todos: [...state.todos, state.todo],
    }));
  }

  editTodo(id) {
    const value = this.state.edit;
    let list = [...this.state.todos];
    let index = list.findIndex((el) => {
      return el.id === id
    });
    list[index] = value
    this.setState({todos: list})
  }

  deleteTodo(id) {
    let list = this.state.todos.filter((el) => el.id !== id);
    this.setState({ todos: list });
  }

  handleChange(event, category) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((state) => ({
      [category]: {
        ...state[category],
        [name]: value,
      },
    }));
  }

  setEdit(todo) {
    this.setState({edit: todo})
  }

  addTodoPopup() {
    return (
      <div className="modal">
        <div className="modal-box max-w-xl max-h-xl">
          <form
            action=""
            className="flex flex-col gap-2"
            onSubmit={(event) => this.addTodo(event)}
          >
            <input
              type="text"
              name="title"
              value={this.state.todo.title}
              onChange={(event) => this.handleChange(event, "todo")}
              placeholder="Type Todo Here"
              className="input font-semibold input-bordered input-primary w-full max-w-xs"
            />
            <textarea
              name="desc"
              cols="30"
              rows="10"
              value={this.state.todo.desc}
              onChange={(event) => this.handleChange(event, "todo")}
              placeholder="Type Description Here"
              className="textarea textarea-primary"
            ></textarea>
          </form>
          <div className="modal-action">
            <label
              htmlFor="add-todo-modal"
              onClick={(event) => {
                this.addTodo(event);
              }}
              className="btn btn-primary"
            >
              + Add Todo
            </label>
            <label htmlFor="add-todo-modal" className="btn btn-ghost">
              Cancel
            </label>
          </div>
        </div>
      </div>
    );
  }

  editTodoPopup() {
    return (this.state.edit &&
      <div className="modal">
        <div className="modal-box max-w-xl max-h-xl">
          <form
            action=""
            className="flex flex-col gap-2"
          >
            <input
              type="text"
              name="title"
              value={this.state.edit.title}
              onChange={(event) => this.handleChange(event, "edit")}
              placeholder="Type Todo Here"
              className="input font-semibold input-bordered input-primary w-full max-w-xs"
            />
            <textarea
              name="desc"
              cols="30"
              rows="10"
              value={this.state.edit.desc}
              onChange={(event) => this.handleChange(event, "edit")}
              placeholder="Type Description Here"
              className="textarea textarea-primary"
            ></textarea>
          </form>
          <div className="modal-action">
            <label
              htmlFor="edit-todo-modal"
              className="btn btn-primary"
              onClick={(event) => this.editTodo(this.state.edit.id)}
            >
              Done
            </label>
          </div>
        </div>
      </div>
    );
  }

  renderTodos() {
    return this.state.todos.map((todo) => (
      <li
        key={todo.id}
        className="grid grid-cols-[75px_400px_75px] items-center gap-4"
      >
        <button
          onClick={() => this.deleteTodo(todo.id)}
          className="btn btn-error text-white"
        >
          Delete
        </button>
        <div
          tabIndex="0"
          className="collapse min-h-6 collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">{todo.title}</div>
          <div className="collapse-content">
            <p>{todo.desc}</p>
          </div>
        </div>
        <label
          htmlFor="edit-todo-modal"
          className="btn btn-secondary font-bold mt-6 modal-button"
          onClick={() => this.setEdit(todo)}
        >
          Edit
        </label>
      </li>
    ));
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos))
  }

  render() {
    return (
      <div className="flex flex-col items-center p-8 gap-6">
        <h1 className="text-6xl font-bold">Todo List</h1>
        <ul className="flex flex-col gap-2">{this.renderTodos()}</ul>
        <label
          htmlFor="add-todo-modal"
          className="btn btn-primary font-bold mt-6 modal-button"
        >
          +Add Todo
        </label>
        <input type="checkbox" id="add-todo-modal" className="modal-toggle" />
        {this.addTodoPopup()}
        <input type="checkbox" id="edit-todo-modal" className="modal-toggle" />
        {this.editTodoPopup()}
      </div>
    );
  }
}

export default App;
