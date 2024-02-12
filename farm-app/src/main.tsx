import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from 'react-query';
import "./index.css";
import "./App.css"
import customFetch from "./global/customFetch.tsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: customFetch
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
