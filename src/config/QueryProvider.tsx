import {QueryClient, QueryClientProvider} from 'react-query';
import React, {FC, PropsWithChildren} from 'react';
import {ReactQueryDevtools} from 'react-query/devtools';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // staleTime: Infinity, // время свежести данных
        staleTime: 60 * 1000,
        cacheTime: 60 * 1000
      }
    }
  }
);

export const QueryProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}