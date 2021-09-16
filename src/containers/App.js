import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // 
      robots: robots,
      searchfield: ''
    }
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ robots: users})});
  // }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='flex items-center flex-column mh6'>
          <h1 className='f1 pv4'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          
            <CardList robots={filteredRobots} />
          
        </div>
      );
  }
}

export default App;