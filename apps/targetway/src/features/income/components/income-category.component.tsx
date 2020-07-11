import React from 'react';
import { IncomeSubcategory } from './income-subcategory.component';

export const IncomeCategory = props => {

  const {title, subcategories} = props

  console.log(subcategories)

  return (
    <>
      <span>{title}</span>
      <div>
        {subcategories.map(subcategory => (
          <>
            <IncomeSubcategory title={subcategory.title} sum={subcategory.sum}/>
            <br/>
          </>
        ))}
      </div>
    </>
  )
}
