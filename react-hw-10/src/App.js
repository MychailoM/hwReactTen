import React, { Component } from "react";
import "./App.css";

const COURSE = {
  HTML: "html",
  CSS: "css",
  JS: "js",
  REACT: "react",
};

const INITIAL_STATE = {
  name: "",
  group: "",
  course: null,
  agreed: false,
};

class Login extends Component {
  state = {
    ...INITIAL_STATE,
    users: [],
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, group, course, agreed } = this.state;
    const newUser = { name, group, course, agreed };

    this.setState((prevState) => ({
      users: [...prevState.users, newUser],
      ...INITIAL_STATE,
    }));
  };

  render() {
    const { name, group, course, agreed, users } = this.state;

    return (
      <div className="midleBox">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1 className="mainTitle">Sign Up</h1>
          <div className="inputsbox">
            <label>
              <input
                className="userNameInput"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={this.handleChange}
              />
            </label>

            <label>
              <input
                className="course"
                type="text"
                name="group"
                placeholder="Group"
                value={group}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="container">
            <h2 className="title">Оберіть курс</h2>

            <label className="radio">
              HTML
              <input
                type="radio"
                name="course"
                value={COURSE.HTML}
                checked={course === COURSE.HTML}
                onChange={this.handleChange}
              />
            </label>

            <label className="radio">
              CSS
              <input
                type="radio"
                name="course"
                value={COURSE.CSS}
                checked={course === COURSE.CSS}
                onChange={this.handleChange}
              />
            </label>

            <label className="radio">
              JS
              <input
                type="radio"
                name="course"
                value={COURSE.JS}
                checked={course === COURSE.JS}
                onChange={this.handleChange}
              />
            </label>

            <label className="radio">
              REACT
              <input
                type="radio"
                name="course"
                value={COURSE.REACT}
                checked={course === COURSE.REACT}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <label className="check">
            Присутність
            <input
              type="checkbox"
              name="agreed"
              checked={agreed}
              onChange={this.handleChange}
            />
          </label>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>

        <div className="infoBox">
          <h2 className="infoTitle">Зареєстровані</h2>
          {users.length === 0 ? (
            <p className="error">Немає даних</p>
          ) : (
            <ul className="list">
              {users.map((user, index) => (
                <li className="item" key={index}>
                  <h2 className="userName">{user.name}</h2>
                  <h3 className="userGroup">група: {user.group}</h3>
                  <h3 className="userCourse">курс: {user.course.toUpperCase()}</h3>
                  <h3 className="userCheck">присутність: {user.agreed ? "так" : "ні"}</h3>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="mainBox">
        
        <Login />
      </div>
    );
  }
}

export default App;
