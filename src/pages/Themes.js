import woman from '../assets/images/page1-woman pic.png'
import poverty from '../assets/images/poverty and displacement.jpg'
import food from '../assets/images/not enough food.jpg'
import risks from '../assets/images/more healthrisks.jpg'
import plants from '../assets/images/loss of plants and animals.jpg'
import lamustory from '../assets/images/lamustory.jpg'
import lamupic from '../assets/images/lamupic.jpg'
import drought from '../assets/images/increased droughts.jpg'
import oceans1 from '../assets/images/hotter temperatures and rising oceans.jpg'
import oceans2 from '../assets/images/hotter temperatures and rising oceans pic3.jpg'
import oceans3 from '../assets/images/hotter temperatures and rising oceans pic2.jpg'
import '../assets/scss/themes.scss'
const Themes = () => {
  return (
    <div className="themes-page">
      
<ul className="honeycomb">
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={food}/>
        <div className="honeycomb-cell_title">Less than Enough Food</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={drought}/>
        <div className="honeycomb-cell_title">Increased Droughts</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={plants}/>
        <div className="honeycomb-cell_title">Loss of plants and animals</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={poverty}/>
        <div className="honeycomb-cell_title">Poverty & displacement</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={oceans1}/>
        <div className="honeycomb-cell_title">Hotter Temperatures</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={oceans2}/>
        <div className="honeycomb-cell_title">Rising Oceans</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={risks}/>
        <div className="honeycomb-cell_title">More Health risks</div>
    </li>
    <li className="honeycomb-cell honeycomb_Hidden">
    </li>
</ul>

    </div>
  )
}

export default Themes