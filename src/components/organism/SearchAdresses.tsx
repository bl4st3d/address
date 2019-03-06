import * as React from 'react'
import Label from '../atoms/Label'
import Autocomplete from '../molecule/Autocomplete'

export interface SearchAddress {
  value: string;
  onChange: Function;
  res: {
    data: Array<any>
  };
  element: HTMLElement
}

export interface SearchAddressState {
  value: string;
  addresses: [];
  res: {
    data: Array<any>
  };
  element: HTMLElement
}

export default class SearchAddresses<SearchAddress, SearchAddressState> extends React.Component {
  constructor(props: SearchAddress) {
    super(props);
    this.state = {
      value: '',
      addresses: []
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
    const element = document.querySelector('.search-suggestions') as HTMLElement
    element.style.display = 'block'
  }

  getSelectedAddress = value => {
    this.setState({ value: value })
  }

  componentDidUpdate(prevProps: SearchAddress, prevState: { value: string }) {
    if (prevState.value !== this.state.value) {
      // http://addresses.test.flash-global.net/api/addresses?global=12+rue+rivoli&per_page=10&deleted=FALSE
      fetch(`http://addresses.test.flash-global.net/api/addresses?${this.state.value.split(' ').join('+')}`)
        .then(res => res.json())
        .then(res => this.setState({ addresses: [res.data] }))
        .catch(err => console.error(err))
    }

  }
  render() {
    console.log(this.state, 'state searchAdress')
    return (
      <section className="adresses-search">
        <Label />
        <Autocomplete
          handleChange={this.handleChange}
          value={this.state.value}
          addresses={this.state.addresses}
          getSelectedAddress={this.getSelectedAddress}
        />
      </section>
    )
  }
}