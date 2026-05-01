import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Template1 from "./pages/templates/Template1.tsx";
import Template2 from "./pages/templates/Template2.tsx";
import Template3 from "./pages/templates/Template3.tsx";
import Listings from "./pages/Listings.tsx";
import PropertyDetail from "./pages/PropertyDetail.tsx";
import Contact from "./pages/Contact.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/template/1" element={<Template1 />} />
          <Route path="/template/2" element={<Template2 />} />
          <Route path="/template/3" element={<Template3 />} />
          <Route path="/template/:template/listings" element={<Listings />} />
          <Route path="/template/:template/property/:slug" element={<PropertyDetail />} />
          <Route path="/template/:template/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
