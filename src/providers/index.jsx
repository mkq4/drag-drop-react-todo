import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";


// eslint-disable-next-line react/prop-types
export function Providers({children}) {
    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false
                }
            }
        })
    )

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}