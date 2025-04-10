import HeroSection from '@/components/HeroSection';
import WhyPromenSection from '@/components/WhyPromenSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BetaSignupSection from '@/components/BetaSignupSection';
import RoadmapSection from '@/components/RoadmapSection';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhyPromenSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BetaSignupSection />
      <RoadmapSection />
    </Layout>
  );
}
