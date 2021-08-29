import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list-component";
import { SearchBox } from "./components/searchbox/searchbox-box-component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
    
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
   
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1 style={{textAlign: "center"}}>Robofriends</h1>
        <SearchBox
          placeHolder="search the robots"
          searchFunction={this.handleChange}
        />

        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
