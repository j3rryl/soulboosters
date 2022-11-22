import { useEffect, useState } from "react"

import '../assets/scss/faq.scss'
import Questions from "../components/Questions"

const Faq = () => {
  const faqs = document.querySelectorAll(".faq")
  const [faq,setFaq]=useState(
    false)
  function toggleFaq(){
      faqs.forEach(faq=>{
        faq.addEventListener("click", ()=>{
          faq.classList.toggle("active")
        })
      })
      setFaq(!faq)
  }
  return (
    <div className="faq-page">
      <div className="faq-card">
        <Questions question='How does SoulBoosters intend to work with rural women farmers?'/>
        <Questions question='How will SoulBoosters work around low literacy and education levels?'/>
        <Questions question='How is SoulBoosters benefitting farmers?'/>
        <Questions question='How will SoulBoosters scale up and out?'/>
        <Questions question="How will SoulBoosters ensure farmers' ROI?"/>
        <Questions question="How will SoulBoosters cushion farmers from avoidable losses?"/>
      </div>
    </div>
  )
}

export default Faq