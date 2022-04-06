
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
        priority: 'high'
      },
      {
        id: uuidv4(),
        title: 'Test',
        teamMamber:'Israa',
        priority: 'high'
      }
    ],
    title:'',
    teamMamber: '',
    priority: 'low',
    priorityFilter: 'all',
    displayPop: false,
   } 

   handelChange = ({target}) => {
    const { name, value } = target
    return this.setState({ [name] : value})
  }
  Changedisplay = () => {
    return this.setState({displayPop: !this.state.displayPop})
  }

  render() { 
    const {tasks, priorityFilter, displayPop, title, teamMamber, priority} = this.state;
    console.log(this.state);
    return (
      <div className="App">
      ToDoList
      <Form priorityFilter={priorityFilter} handelChange={this.handelChange} Changedisplay={this.Changedisplay}/>
      <AddTask displayPop={displayPop} Changedisplay={this.Changedisplay} handelChange={this.handelChange} title={title} teamMamber={teamMamber} priority={priority}/>
      <Tasks tasks={tasks} />
    </div>
    );
  }
}
 
export default App;

