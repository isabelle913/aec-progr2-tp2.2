import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        Bonjour
        <Routes>
          <Route></Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
