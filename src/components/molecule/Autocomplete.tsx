import * as React from 'react'
import Input from '../atoms/Input'
import SearchSuggestion from '../atoms/SearchSuggestions'

const Autocomplete = props => {
  return (
    <div className="autocomplete">
      <Input handleChange={props.handleChange} value={props.value} />
      <SearchSuggestion
        addresses={props.addresses}
        value={props.value}
        handleChange={props.handleChange}
        getSelectedAddress={props.getSelectedAddress}
      />
    </div>
  )
}

export default Autocomplete