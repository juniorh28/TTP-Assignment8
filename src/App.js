import './App.css';
import { Component } from 'react';

// components
import { Table, TableCell, TableRow} from "./Components";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  
  render() {
    return (
      <div className="App">
        <div class="bar">
            <ul>
                <button class="addRowButton" onClick= {true}> Add Row </button>
                <button class="addColButton" onClick= {true}> Add Column </button>
                <button class="removeRowButton" onClick= {true}> Remove Row </button>
                <button class="removeColButton" onClick= {true}> Remove Column </button>
                <select onChange={true}>
                    <option>Blue</option>
                    <option>Red</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Grey</option>
                    <option>Yellow</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Brown</option>
                    <option>Pink</option>
                    <option>Orange</option>
                    <option>Purple</option>
                </select>
                <button onClick={true}> Clear </button>
                <button class="fillAll" onclick= {true}> Fill All </button>
                <button class="fillUncolored" onclick={true}> Fill Uncolored </button>
            </ul>	
            {/* <Table /> */}
        </div>
      </div>
    );
  }
}
export default App;
