import {QueryClient, QueryClientProvider} from 'react-query';
import React, {FC, PropsWithChildren} from 'react';
import {ReactQueryDevtools} from 'react-query/devtools';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // staleTime: Infinity, // время свежести данных
        // staleTime: 60 * 1000,
        // cacheTime: 60 * 1000,
        // retry: 2,
        // retryDelay: 10 * 1000, // по умолчанию CB не рекомендуется к переопределению
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