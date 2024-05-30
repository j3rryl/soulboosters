import "../assets/scss/involve.scss";
import FundMe from "../components/FundMe";
import twitter from "../assets/icons/twitter.svg";
import mail from "../assets/icons/envelope-regular.svg";
import instagram from "../assets/icons/instagram.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import facebook from "../assets/icons/facebook.svg";
import Form from "../components/Form";

const Involve = () => {
  return (
    <div className="involve-page">
      <div className="involve-card">
        <span>
          <p>Do you want to fund an innovative problem-solving woman?</p>
          <FundMe />
          <p>Do you know of a problem-solving woman in your locality?</p>
          <p>Please Contact us at any of our social media plaforms below.</p>
          <div className="social-media">
            <a href="https://gmail.com" target="_blank">
              <img className="media-icon" src={mail} />
            </a>
            <a href="https://facebook.com" target="_blank">
              <img className="media-icon" src={facebook} />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img className="media-icon" src={instagram} />
            </a>
            <a href="https://whatsapp.com" target="_blank">
              <img className="media-icon" src={whatsapp} />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img className="media-icon" src={twitter} />
            </a>
          </div>
          <p>
            Could you provide a short profile of the woman you'd like we
            contact?
          </p>
          <Form />
        </span>
      </div>
    </div>
  );
};

export default Involve;
