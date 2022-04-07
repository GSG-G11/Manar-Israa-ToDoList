import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Tasks from "./Companents/Tasks";
import Form from "./Companents/Form";
import AddTask from "./Companents/AddTask";

class App extends Component {
  state = {
    tasks: [
      {
        id: uuidv4(),
        title: "Test",
        teamMamber: "Israa",
        priority: "high",
        done: false,
      },
      {
        id: uuidv4(),
        title: "Test",
        teamMamber: "Manar",
        priority: "low",
        done: true,
      },
    ],
    title: "",
    teamMamber: "",
    priority: "low",
    priorityFilter: "all",
    CompleteFilter: "all",
    displayPop: false,
    error: "",
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    isEditing:false,
  };

  handelChange = ({ target }) => {
    const { name, value } = target;
    return this.setState({ [name]: value });
  };

  Changedisplay = () => {
    return this.setState({ displayPop: !this.state.displayPop });
  };

  addTask = (e) => {
    e.preventDefault();
    if (!this.state.title.trim()) {
      this.setState({ error: "can't be empty" });
    } else if (!this.state.teamMamber.trim()) {
      this.setState({ error: "can't be empty" });
    } else {
      const task = {
        id: uuidv4(),
        title: this.state.title,
        teamMamber: this.state.teamMamber,
        priority: this.state.priority,
        done: false,
      };
      this.Changedisplay();
      return this.setState((prevState) => {
        return {
          tasks: [...prevState.tasks, task],
          title: "",
          teamMamber: "",
          priority: "",
          error: "",
          isEditing:false,
        };
      });
    }
  };

  deleteTask = (id) => {
    return this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((task) => {
          return task.id !== id;
        }),
      };
    });
  };

  checkTask = (id) => {
    return this.setState((prevState) => {
      return {
        tasks: prevState.tasks.map((task) => {
          if (task.id === id) {
            return { ...task, done: !task.done };
          }
          return task;
        }),
      };
    });
  };
  CloseUpdate = () => {
    return this.setState({ displayPopUpdate: !this.state.displayPopUpdate });
  };
  updateTask = (id) => {

    const taskUpdate = this.state.tasks.filter((task)=>{
      return task.id !==id
    })
    const taskedit = this.state.tasks.find((task)=>{
      return task.id === id
    })
  this.setState({
    tasks:taskUpdate,
    title:taskedit.title,
    teamMamber:taskedit.teamMamber,
    priority:taskedit.priority,
    isEditing:true,
  })
  this.Changedisplay()
  }
  render() {
    const {
      tasks,
      priorityFilter,
      displayPop,
      title,
      teamMamber,
      priority,
      CompleteFilter,
      days,
      error,
      isEditing,
    } = this.state;
    return (
      <div>
        <div className="App">
          <h2 className="text-center-head">
            {" "}
            Happy fabulous {days[new Date().getDay()]} 😌☕️
          </h2>
          <Form
            priorityFilter={priorityFilter}
            CompleteFilter={CompleteFilter}
            handelChange={this.handelChange}
            Changedisplay={this.Changedisplay}
            filterPriorityHandel={this.filterPriorityHandel}
          />

          <AddTask
            error={error}
            displayPop={displayPop}
            Changedisplay={this.Changedisplay}
            handelChange={this.handelChange}
            title={title}
            teamMamber={teamMamber}
            priority={priority}
            addTask={this.addTask}
            isEditing={isEditing}
          />
          <Tasks
            tasks={tasks}
            deleteTask={this.deleteTask}
            checkTask={this.checkTask}
            priorityFilter={priorityFilter}
            CompleteFilter={CompleteFilter}
            ChangedisplayForUpdate={this.ChangedisplayForUpdate}
            updateTask={this.updateTask}
          />
        </div>

        <footer className="footer">
          {" "}
          All Rights Reserved 2022 © thanks ❤️
        </footer>
      </div>
    );
  }
}

export default App;
