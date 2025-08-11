import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AutoScaleFramework from '@/components/AutoScaleFramework';
import Deliveries from '@/components/Deliveries';
import VRDMethod from '@/components/VRDMethod';
import PricingPlans from '@/components/PricingPlans';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AutoScaleFramework />
        <Deliveries />
        <VRDMethod />
        <PricingPlans />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
