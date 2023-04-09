import {useState} from "react"
import React from "react"

const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

function StateDropDown({onChange, name, value, className,...rest}) {
  
  return (
    <div className="App">
    <select
             
              name={name}
              {...rest}
              className={ className}
              onChange={onChange}
             >
             {states.map((state)=>{
              return <option value={state}>{state}</option>
             })}
              
            </select>
    </div>
  );
}

export default StateDropDown
