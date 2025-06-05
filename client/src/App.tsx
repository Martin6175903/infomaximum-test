import { FC } from 'react';
import Cars from './pages/Cars/Cars';
import Header from './components/header/Header';

const App: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Cars />
    </div>
  );
};

export default App;
