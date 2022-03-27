import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductCard from './components/ProductCard';
import GlobalStyles from './components/GlobalStyles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount) {
        if (failureCount < 2) return true;
        return false;
      },
    },
  },
});

function App() {
  return (
    <>
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
        <ProductCard />
      </QueryClientProvider>
    </>
  );
}

export default App;
