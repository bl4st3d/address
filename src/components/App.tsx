import * as React from 'react';
import SearchAddresses from './organism/SearchAdresses'
import '../style/main.scss'
export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SearchAddresses/> 
      </div>
    )
  }
}