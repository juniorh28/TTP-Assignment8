import './App.css';
import { Component } from 'react';

// components
import { Table, TableCell, TableRow} from "./Components";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: "",
      grid: []
    }
  }
  
  addRow = () => {
    return <Table />
  }

  render() {
    return (
      <div className="App">
        <div class="bar">
            <ul>
                <button class="addRowButton" onClick= {this.addRow}> Add Row </button>
                <button class="addColButton" > Add Column </button>
                <button class="removeRowButton" > Remove Row </button>
                <button class="removeColButton" > Remove Column </button>
                <select >
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
                <button > Clear </button>
                <button class="fillAll" > Fill All </button>
                <button class="fillUncolored" > Fill Uncolored </button>
            </ul>	
            {/* <Table /> */}
        </div>
      </div>
    );
  }
}
export default App;
