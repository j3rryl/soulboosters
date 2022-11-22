import '../assets/scss/involve.scss'
import FundMe from '../components/FundMe'
import twitter from '../assets/icons/twitter.svg'
import mail from '../assets/icons/envelope-regular.svg'
import instagram from '../assets/icons/instagram.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import facebook from '../assets/icons/facebook.svg'
import Form from '../components/Form'




const Involve = () => {
  return (
    <div className='involve-page'>
      <div className='involve-card'>
        <span>
          <p>
            Do you want to fund an inniovating problem-solving woman?
          </p>
          <FundMe />
          <p>Do you know of a problem-solving woman in your locality?</p>
          <p>Please Contact us at any of our social media plaforms below.</p>
          <div className='social-media'>
            <img className="media-icon" src={mail}/>
            <img className="media-icon" src={facebook}/>
            <img className="media-icon" src={instagram}/>
            <img className="media-icon" src={whatsapp}/>
            <img className="media-icon" src={twitter}/>
          </div>
          <p>Could you provide a short profile of the woman you'd like we contact?</p>
          <Form />
        </span>
      </div>
    </div>
  )
}

export default Involve