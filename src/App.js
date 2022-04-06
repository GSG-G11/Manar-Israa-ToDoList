
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Tasks from './Companents/Tasks';
import Form from './Companents/Form';
import AddTask from './Companents/AddTask';

class App extends Component {
  state = { 
    tasks: [
      {
        id: uuidv4(),
        title: 'Test',
        teamMamber:'Israa',
        priority: 'high',
        done: false,
      },
      {
        id: uuidv4(),
        title: 'Test',
        teamMamber:'Manar',
        priority: 'high',
        done: true,

      }
    ],
    title:'',
    teamMamber: '',
    priority: 'low',
    priorityFilter: 'all',
    displayPop: false,
    tasksFilter : []
   } 

   handelChange = ({target}) => {
    const { name, value } = target
    return this.setState({ [name] : value})
  }
  Changedisplay = () => {
    return this.setState({displayPop: !this.state.displayPop})
  }
    addTask = (e)=> {
      e.preventDefault()
      const task= {
        id :uuidv4(),
        title : this.state.title,
        teamMamber : this.state.teamMamber,
        priority : this.state.priority,
        done : false
      }
      return this.setState((prevState)=>{ return {tasks : [...prevState.tasks,task] }});
    }
  
  deleteTask = (id)=> {
    return this.setState((prevState)=> {return {tasks : prevState.tasks.filter(task=> {return task.id !=id})}})
  }
  checkTask = (id)=> {
   return this.setState((prevState)=>{return {tasks : prevState.tasks.map((task) => {
    if(task.id == id) {
        if(task.done === false) {
          console.log(false)
            task.done = true
        }else if(task.done == 1) {
          console.log(true)
            task.done = false
        }
          return  task
    }
    return task
    })}})
  }

  

  render() { 
    const {tasks, priorityFilter, displayPop, title, teamMamber, priority} = this.state;
    return (
      <div className="App">
      ToDoList
      <Form priorityFilter={priorityFilter} handelChange={this.handelChange} Changedisplay={this.Changedisplay}/>
      <AddTask 
        displayPop={displayPop}
        Changedisplay={this.Changedisplay} 
        handelChange={this.handelChange} 
        title={title} 
        teamMamber={teamMamber} 
        priority={priority}
        addTask={this.addTask}
      />
      <Tasks tasks={tasks} deleteTask={this.deleteTask} checkTask={this.checkTask} />
    </div>
    );
  }
}
 
export default App;

