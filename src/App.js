import './App.css';
import { Component } from 'react';

// components
import { Table, TableCell, TableRow} from "./Components";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: "",
      rows: [[<TableRow />]],
      rowCount: 0,
      columnCount: 0
    }
  }
  
  addRow = () => {
    var joined = this.state.rows.concat([<TableRow />]);
    this.setState({
      rows: joined,
      rowCount: this.state.rowCount + 1
    })
  }

  addColumn = () => {
    this.setState({columnCount: this.state.columnCount + 1})
    let newColumn = []
    for (let x = 0; x < this.state.rowCount; x++) {
        newColumn.push(<TableCell />)
    }
    let original = this.state.rows
    console.log(this.state.rows.push(newColumn))
    this.setState({
      rows: joined
    })
  }


  

  render() {
    return (
      <div className="App">
        <div class="bar">
            <ul>
                <button class="addRowButton" onClick={this.addRow}> Add Row </button>
                <button class="addColButton" onClick={this.addColumn}> Add Column </button>
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
            <div class="table">
              {this.state.rows}
            </div>
        </div>
      </div>
    );
  }
}
export default App;
