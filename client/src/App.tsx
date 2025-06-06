import { FC } from 'react';
import Cars from './pages/Cars/Cars';
import Header from './components/header/Header';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const App: FC = () => {
  const apolloClient = new ApolloClient({
    uri: `${VITE_SERVER_URL}/api`,
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={apolloClient}>
      <div className="wrapper">
        <Header/>
        <Cars/>
      </div>
    </ApolloProvider>
  );
};

export default App;
