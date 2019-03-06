import * as React from 'react'

const SearchSuggestion = props => {
  const element = document.querySelector('.search-suggestions') as HTMLElement
  return (
    <ul className="search-suggestions">
      {
        props.addresses && props.addresses.length > 0 && props.addresses.map(allAddress => {
          return allAddress.map((address, index) => {
            let wholeAddress = `${address.attributes.address} ${address.attributes.additionnalAddress} ${address.attributes.zip} ${address.attributes.city}`
            return <li
              value={`${address.attributes.address} ${address.attributes.additionnalAddress} ${address.attributes.zip} ${address.attributes.city}`}
              key={index}
              onClick={() => {
                props.getSelectedAddress(wholeAddress);
                element.style.display = 'none'
              }}
            >
              {wholeAddress}
            </li>
          })
        })
      }
    </ul>
  )
}

export default SearchSuggestion;