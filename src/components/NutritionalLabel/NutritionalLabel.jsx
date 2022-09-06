import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel({item}) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{item.item_name}</h4>

      <ul className="fact-list">{nutritionFacts.map((fact, idx) => 
      <NutritionalLabelFact fact = {fact} key = {idx} item = {item}/>
      )}</ul>
    </div>
  )
}

export function NutritionalLabelFact({fact, item}) {
  return (
    <li className="nutrition-fact" key = {fact.id} >
      <span className="fact-label">{fact.label}</span>{" "}
      <span className="fact-value">{item[fact.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
