import woman from '../assets/images/page1-woman pic.png'
import poverty from '../assets/images/poverty and displacement.jpg'
import food from '../assets/images/not enough food.jpg'
import plants from '../assets/images/loss of plants and animals.jpg'
import lamustory from '../assets/images/lamustory.jpg'
import lamupic from '../assets/images/lamupic.jpg'
import drought from '../assets/images/increased droughts.jpg'
import oceans1 from '../assets/images/hotter temperatures and rising oceans.jpg'
import oceans2 from '../assets/images/hotter temperatures and rising oceans pic3.jpg'
import oceans3 from '../assets/images/hotter temperatures and rising oceans pic2.jpg'

import paths from '../assets/images/Developing pathways.png'
import governance from '../assets/images/Increasing governance.png'
import security from '../assets/images/Increasing security.png'
import farmers from '../assets/images/Meeting farmer needs.png'
import risks from '../assets/images/Reducing risks.png'
import finance from '../assets/images/Unlocking climate finance.png'
import '../assets/scss/themes.scss'
const Themes = () => {
  return (
    <div className="themes-page">
      
<ul className="honeycomb">
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={paths}/>
        <div className="honeycomb-cell_title">Developing pathways</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={governance}/>
        <div className="honeycomb-cell_title">Increasing governance</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={security}/>
        <div className="honeycomb-cell_title">Increasing Security</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={farmers}/>
        <div className="honeycomb-cell_title">Meeting farmer needs</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={risks}/>
        <div className="honeycomb-cell_title">Reducing Risks</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={finance}/>
        <div className="honeycomb-cell_title">Unlocking climate finance</div>
    </li>
    {/* <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={oceans1}/>
        <div className="honeycomb-cell_title">More Health risks</div>
    </li> */}
    <li className="honeycomb-cell honeycomb_Hidden">
    </li>
</ul>

    </div>
  )
}

export default Themes