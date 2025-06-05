import { FC } from 'react';
import Cars from './pages/Cars/Cars';
import Header from './components/header/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const App: FC = () => {
  const queryClient = new QueryClient();
  const apolloClient = new ApolloClient({
    uri: import.meta.env.SERVER_URL,
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <div className="wrapper">
          <Header/>
          <Cars/>
        </div>
      </QueryClientProvider>
    </ApolloProvider>
  );
};

export default App;
