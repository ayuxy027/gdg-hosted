import { MainLayout } from "../layouts/MainLayout";
import { HeroSection } from "../components";
import { StatsSection } from "../components";
import { AboutSection } from "../components";
import { CTASection } from "../components";

const Home = () => (
  <MainLayout>
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <CTASection />
  </MainLayout>
);

export default Home;
