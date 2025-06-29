
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Games from "./pages/Games";
import About from "./pages/About";
import TicTacToe from "./pages/TicTacToe";
import Snake from "./pages/Snake";
import RockPaperScissors from "./pages/RockPaperScissors";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/games/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/games/snake" element={<Snake />} />
          <Route path="/games/rock-paper-scissors" element={<RockPaperScissors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
