import React from 'react';

export const IncomeSubcategory = props => {

  const {title, sum} = props

  console.log(sum)

  return (
    <>
      <span>{title}</span>
      <span>{sum}</span>
    </>
  )
}
