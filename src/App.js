import './App.css';
import React, { Component } from 'react';
import Heading from './Heading';
import Lefty from './Lefty';
import Righty from './Righty';

class App extends Component {
  constructor() {
    super();

    this.state = {
      debtors: [],
      debtor: '',
      owed: Number,
      completed: false,
    };
  }

  updateDebtor(value) {
    this.setState({debtor: value});
  }

  updateOwed(value) {
    this.setState({owed: value});
  }

  updateCompleted(value) {
    this.setState({completed: value});
  }

  addDebtors() {
    const {debtors, debtor, owed, completed} = this.state;

    let newDebtors = debtors.slice();
    newDebtors.push({debtor, owed, completed});

    this.setState({debtors: newDebtors, debtor: '', owed: Number, completed: false});
  }

  removeDebtor(id) {
    let copy = [...this.state.debtors];
    copy.splice(id, 1);
    this.setState({debtors:copy})
  }

  strikeThrough(id) {
    let strike = [...this.state.debtors];
    strike[id].completed = !strike[id].completed;
    this.setState({debtors:strike})
  }
  

  render() {
    const debtors = this.state.debtors.map((collect, i) => (
      <div key={ `${i} ${collect.debtor} ${collect.owed} ${collect.completed}`}>
        
        <div className={`this.state ${this.completed && 'checked-item'}`}>
          <div onClick={ () => this.strikeThrough(i)}>
            {this.completed && (
              <span>{collect.completed}</span>
            )}
          </div>
        </div>
        
        <span>{collect.debtor}</span>
        <span>{collect.owed}</span>
        {console.log(i)}
        <button onClick={ () => this.removeDebtor(i)}>Delete</button>
      </div>
    ))
    return (
      <div className='App'>
        <Heading/>
        <Lefty/>
        <Righty/>
        
        <div className='debt-data'>
          <span><b>Debtor:</b></span>
          <input onChange={ (e) => this.updateDebtor(e.target.value)} value={this.state.debtor} />

          <span className='space-out'><b>Amount Owed:</b></span>
          <input onChange={ (e) => this.updateOwed(e.target.value)} value={this.state.owed} />

          <button onClick={ () => this.addDebtors()}>Add Debtor</button>
          
          {debtors}
        </div>
        
      </div>
    );
  };
};
export default App;
