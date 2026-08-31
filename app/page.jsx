import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Pricing from '@/components/landing/Pricing';
import HowItWorks from '@/components/landing/HowItWorks';
import SocialProof from '@/components/landing/SocialProof';
import FinalCta from '@/components/landing/FinalCta';

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Features />
        <Pricing />
        <HowItWorks />
        {/* <SocialProof /> */}
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
