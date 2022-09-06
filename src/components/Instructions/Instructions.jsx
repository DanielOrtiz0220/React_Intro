import * as React from "react"
import "./Instructions.css"

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p className = "start">{props.listOfInstructions.start}</p>
      {/* <p className = "onlyCategory" >2. {props.listOfInstructions.onlyCategory}</p>
      <p className = "onlyRestaurant">3. {props.listOfInstructions.onlyRestaurant}</p>
      <p className = "noSelectedItem">4. {props.listOfInstructions.noSelectedItem}</p>
      <p className = "allSelected">5. {props.listOfInstructions.allSelected}</p> */}
    </aside>
  )
}

export default Instructions
