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
    };
  }

  updateDebtor(value) {
    this.setState({debtor: value});
  }

  updateOwed(value) {
    this.setState({owed: value});
  }

  addDebtors() {
    const {debtors, debtor, owed} = this.state;

    let newDebtors = debtors.slice();
    newDebtors.push({debtor, owed});

    this.setState({debtors: newDebtors, debtor: '', owed: Number});
  }

  removeDebtor(id) {
    let copy = [...this.state.debtors];
    copy.splice(id, 1);
    this.setState({debtors:copy})
  }

  render() {
    const debtors = this.state.debtors.map((collect, i) => (
      <div key={ `${i} ${collect.debtor} ${collect.owed}`}>
        <span>{collect.debtor}</span>
        <span>${collect.owed}</span>
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