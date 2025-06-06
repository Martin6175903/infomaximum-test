import { FC } from 'react';
import Cars from './pages/Cars/Cars';
import Header from './components/header/Header';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router';
import Favorites from './pages/Favorites/Favorites';
import Car from './pages/Car/Car';
import NotFound from './pages/NotFound/NotFound';

const App: FC = () => {
  const apolloClient = new ApolloClient({
    uri: `${VITE_SERVER_URL}/api`,
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={apolloClient}>
      <div className="wrapper">
        <Toaster position={'top-center'}/>
        <Header/>
        <Routes>
          <Route path={'/'} element={<Cars/>}></Route>
          <Route path={'/favorites'} element={<Favorites/>}></Route>
          <Route path={'/cars/:id'} element={<Car/>}></Route>
          <Route path={'*'} element={<NotFound/>}></Route>
        </Routes>
      </div>
    </ApolloProvider>
  );
};

export default App;
