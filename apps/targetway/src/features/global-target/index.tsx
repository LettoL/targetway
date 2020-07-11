import React, { useEffect, useState } from 'react';
import { GlobalTargetItem } from './components/global-target-item.component';

export const GlobalTarget = () => {
  const [targets, setTargets] = useState([])

  useEffect(() => {
    fetch('/api/globalTarget')
      .then((r) => r.json())
      .then(setTargets);
  }, []);

  return (
    <>
      <span>Глобальные цели</span>
      <br/>
      <div>
        {targets.map(target => (
          <GlobalTargetItem title={target.title} percent={target.percent}/>
        ))}
      </div>
      <br/>
      <span>Добавить цель</span>
    </>
  )
}
