import { FC } from "react";
import Header from "./components/header/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import { routes } from "./routes/routes";

const App: FC = () => {
  const apolloClient = new ApolloClient({
    uri: `${VITE_SERVER_URL}/api`,
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={apolloClient}>
      <div className="wrapper">
        <Toaster position={"top-center"} />
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </ApolloProvider>
  );
};

export default App;
