import React, { useEffect, useState } from 'react';
import { Message } from '@targetway/api-interfaces';
import { GlobalTarget } from '../features/global-target';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <GlobalTarget/>
  );
};

export default App;
