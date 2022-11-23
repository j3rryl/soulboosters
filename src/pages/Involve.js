import '../assets/scss/involve.scss'
import FundMe from '../components/FundMe'
import twitter from '../assets/icons/twitter.svg'
import mail from '../assets/icons/envelope-regular.svg'
import instagram from '../assets/icons/instagram.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import facebook from '../assets/icons/facebook.svg'
import Form from '../components/Form'

const Involve = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='involve-page'>
      <div className='involve-card'>
        <span>
          <p>
            Do you want to fund an innovative problem-solving woman?
          </p>
          <FundMe />
          <p>Do you know of a problem-solving woman in your locality?</p>
          <p>Please Contact us at any of our social media plaforms below.</p>
          <div className='social-media'>
            <img className="media-icon" src={mail} onClick={() => openInNewTab('https://gmail.com')}/>
            <img className="media-icon" src={facebook} onClick={() => openInNewTab('https://facebook.com')}/>
            <img className="media-icon" src={instagram} onClick={() => openInNewTab('https://instagram.com')}/>
            <img className="media-icon" src={whatsapp} onClick={() => openInNewTab('https://whatsapp.com')}/>
            <img className="media-icon" src={twitter} onClick={() => openInNewTab('https://twitter.com')}/>
          </div>
          <p>Could you provide a short profile of the woman you'd like we contact?</p>
          <Form />
        </span>
      </div>
    </div>
  )
}

export default Involve