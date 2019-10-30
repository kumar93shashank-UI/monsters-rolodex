import React, { Component } from "react";
import {Layout} from "antd";
import "antd/dist/antd.css";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
const {Header}=Layout;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
      <Layout>
      <Header style={{background:"LightBlue",marginRight:"40%",marginLeft:"40%",
      fontSize:"10px",paddingBottom:"10px",marginBottom: "10px",marginTop: "10px"}}>
      Monsters Rolodex</Header>  
      <SearchBox
          placeholder="Search Monster"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
        </Layout>
        </div>
    );
  }
}
