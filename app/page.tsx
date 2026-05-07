import { HeroSection } from '@/components/sections/HeroSection'
import { PainSection } from '@/components/sections/PainSection'
import { BenefitSection } from '@/components/sections/BenefitSection'
import { ReasonSection } from '@/components/sections/ReasonSection'
import { ContentSection } from '@/components/sections/ContentSection'
import { TestimonialSection } from '@/components/sections/TestimonialSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { InstructorSection } from '@/components/sections/InstructorSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PainSection />
      <BenefitSection />
      <ReasonSection />
      <ContentSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <InstructorSection />
      <FinalCTASection />
    </main>
  )
}
