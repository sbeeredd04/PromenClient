import HomeSection from '@/components/sections/HomeSection';
import WhySection from '@/components/sections/WhySection';
import HowSection from '@/components/sections/HowSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import BetaSection from '@/components/sections/BetaSection';
import GlassLayout from '@/components/GlassLayout';
import { useEffect } from 'react';

export default function Home() {
  // Initialize scroll animation observer
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);

  return (
    <GlassLayout>
      <HomeSection />
      <WhySection />
      <HowSection />
      <FeaturesSection />
      <RoadmapSection />
      <BetaSection />
    </GlassLayout>
  );
}
