import { useEffect, useState } from "react"

const Questions = ({question}) => {

  const [faq,setFaq]=useState(
    false)
  function toggleFaq(){
      setFaq(!faq)
      console.log(faq)
  }
  useEffect(()=>{
    setFaq(faq)
},[faq])
  return (
    <>
    <div className={`faq ${faq?'active':''}`} onClick={toggleFaq}>
          <div className='question'>
            <h3>{question}</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round"/>
            </svg>
          </div>
          <div className='answer'>
            <p>
              Culpa qui laborum elit reprehenderit esse deserunt minim. Velit nulla sunt do voluptate id. 
              Lorem dolor deserunt eiusmod sint culpa ex ullamco exercitation fugiat veniam. Occaecat sunt cupidatat labore enim cupidatat sunt labore quis do cillum veniam.
            </p>
          </div>
        </div>
        <hr />
    </>
  )
}

export default Questions