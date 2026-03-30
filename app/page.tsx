import { HeroSection } from "@/components/hero-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { FeaturesBar } from "@/components/features-bar"
import { VideoAulaSection } from "@/components/video-aula-section"
import { MetodoSection } from "@/components/metodo-section"
import { MetodoChamaSection } from "@/components/metodo-chama-section"
import { ExplosionCarousel } from "@/components/explosion-carousel"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ChamaProSection } from "@/components/chama-pro-section"
import { ProfessionalSection } from "@/components/professional-section"
import { ModulesSection } from "@/components/modules-section"
import { PacksSection } from "@/components/packs-section"
import { AboutSection } from "@/components/about-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <WhatsAppButton/>
      <HeroSection />
      <VideoAulaSection />
      <ShowcaseSection />
      <FeaturesBar />
      <MetodoSection />
      <TestimonialsSection />
      <MetodoChamaSection />
      <ExplosionCarousel />
      <ModulesSection />
      <ComparisonSection />
      <ChamaProSection />
      <AboutSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
