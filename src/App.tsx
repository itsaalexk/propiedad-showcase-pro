import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Home from "./pages/Home.tsx";
import Listings from "./pages/Listings.tsx";
import PropertyDetail from "./pages/PropertyDetail.tsx";
import Contact from "./pages/Contact.tsx";

import Sell from "./pages/Sell.tsx";
import About from "./pages/About.tsx";
import Terms from "./pages/Terms.tsx";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:theme" element={<Home />} />
          <Route path="/:theme/inversiones" element={<Listings />} />
          <Route path="/:theme/inversion/:slug" element={<PropertyDetail />} />
          <Route path="/:theme/contacto" element={<Contact />} />
          
          <Route path="/:theme/vender" element={<Sell />} />
          <Route path="/:theme/sobre-nosotros" element={<About />} />
          <Route path="/:theme/terminos-y-condiciones" element={<Terms />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
