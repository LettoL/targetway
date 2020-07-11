import React from 'react';
import { GlobalTargetItem } from './components/global-target-item.component';

export const GlobalTarget = () => {

  return (
    <>
      <span>Глобальные цели</span>
      <br/>
      <div>
        <GlobalTargetItem title={'Английский язык уровень С1'} percent={80}/>
        <GlobalTargetItem title={'Финансовая независимость'} percent={40}/>
        <GlobalTargetItem title={'Новая машина'} percent={60}/>
      </div>
      <br/>
      <span>Добавить цель</span>
    </>
  )
}
