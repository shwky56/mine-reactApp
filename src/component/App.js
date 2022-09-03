import React  from 'react'
import { CardList }  from './card-list/card-list.components'
import {Searchbox} from './search-box/search-box.components'
import './App.css'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      searchField: ''
    };
  }
  componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(user => this.setState({users: user}));
  }
  render(){
    const {users, searchField} = this.state;
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
      <h1>min card app with react</h1>
      <Searchbox placeholder='search anything' handleChange={(e) => this.setState({ searchField: e.target.value})} />
      <CardList  users={filtered} />
      </div>
    );  
  }
}

export default App