import React from "react"


const RatesFilter = ({ rates }) => {
  return (rates.map(rate => {
    return <div>
      <button type="button" key={rate.id} className="btn btn-outline-warning mr-2 btn-sm">{rate}</button>
      </div>
  }))
}


export default RatesFilter