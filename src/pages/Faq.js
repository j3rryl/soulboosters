import '../assets/scss/faq.scss'
import Questions from "../components/Questions"

const Faq = () => {
  return (
    <div className="faq-page">
      <div className="faq-card">
        <Questions question='How does SoulBoosters intend to work with rural women farmers?'
        answer="We aim to use simple, definite and efficient ways to effectively mitigate some of the day-to-day challenges faced within our community"/>
        <Questions question='How will SoulBoosters work around low literacy and education levels?'
        answer="Providing guidance to caregivers of young children on how to engage with and stimulate their children with books, with a particular focus on empowering illiterate caregivers to discuss illustrated storybooks and interact with their children."/>
        <Questions question='How is SoulBoosters benefitting farmers?'
        answer="The project will unlock new opportunities for maximizing finance and private sector investments in the nine value chains through a range of value chain investments and other enabling initiatives such as improved subsidy targeting through e-vouchers and operationalizing warehouse receipt financing.”"/>
        <Questions question='How will SoulBoosters scale up and out?'
        answer="We will provide health insurance cover to initially one million households who are vulnerable and unable to meet even that low cost premium. The identification of these one million households by the Ministry of Health, Ministry of Labour and Social Protection, and the Counties is set to begin in a few days across the entire country."/>
        <Questions question="How will SoulBoosters ensure farmers' ROI?"
        answer="We will provide trade finance guarantees and leverage the private sector to ensure sufficient volumes of fertilizer are available to farmers.  In addition to boosting staple food availability, the project, which targets smallholder farmers, is expected to particularly benefit women and youth. "/>
        <Questions question="How will SoulBoosters cushion farmers from avoidable losses?"
        answer="Agricultural insurance which will stabilize farm income and investment
        and guard against disastrous effect of losses due to natural hazards or low market prices.  It cushions the shock of crop losses by providing farmers
        with a minimum amount of protection. It spreads the crop losses over space and time and helps
        farmers make more investments in agriculture.
        "/>
      </div>
    </div>
  )
}

export default Faq