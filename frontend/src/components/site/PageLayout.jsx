import SmoothScroll from "@/lib/SmoothScroll";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const PageLayout = ({ children, testid }) => (
  <SmoothScroll>
    <div
      className="min-h-screen bg-background text-foreground"
      data-testid={testid}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </SmoothScroll>
);
