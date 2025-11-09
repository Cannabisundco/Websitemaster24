import Hero from '@/components/Hero'
import PricingModels from '@/components/PricingModels'
import Demos from '@/components/Demos'
import PriceCalculator from '@/components/PriceCalculator'
import Features from '@/components/Features'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <PricingModels />
      <Demos />
      <PriceCalculator />
    </div>
  )
}

