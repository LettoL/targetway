import React from 'react';
import { IncomeCategory } from './components/income-category.component';

export const Income = () => {

  return (
    <>
      <span>Доходы</span>
      <br/>
      <span>Всего</span><span>866620</span>
      <br/>
      <div>
        <IncomeCategory
          title={'Работа'}
          subcategories={[
              {title:'Стройка', sum: 34620},
              {title:'Веб-дизайнер', sum: 15234}
            ]}
        />
        <IncomeCategory
          title={'Работа'}
          subcategories={[
            {title:'Стройка', sum: 34620},
            {title:'Веб-дизайнер', sum: 15234}
          ]}
        />
        <IncomeCategory
          title={'Работа'}
          subcategories={[
            {title:'Стройка', sum: 34620},
            {title:'Веб-дизайнер', sum: 15234}
          ]}
        />
      </div>
    </>
  )
}
