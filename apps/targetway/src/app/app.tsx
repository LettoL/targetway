import React, { useEffect, useState } from 'react';
import { Message } from '@targetway/api-interfaces';
import { Income } from '../features/income';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <Income/>
  );
};

export default App;
