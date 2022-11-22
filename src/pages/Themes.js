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
      
<ul class="honeycomb">
    <li class="honeycomb-cell">
        <img class="honeycomb-cell_img" src={food}/>
        <div class="honeycomb-cell_title">Less than Enough Food</div>
    </li>
    <li class="honeycomb-cell">
        <img class="honeycomb-cell_img" src={drought}/>
        <div class="honeycomb-cell_title">Increased Droughts</div>
    </li>
    <li class="honeycomb-cell">
        <img class="honeycomb-cell_img" src={plants}/>
        <div class="honeycomb-cell_title">Loss of plants and animals</div>
    </li>
    <li class="honeycomb-cell">
        <img class="honeycomb-cell_img" src={poverty}/>
        <div class="honeycomb-cell_title">Povert & displacement</div>
    </li>
    <li class="honeycomb-cell">
        <img class="honeycomb-cell_img" src={oceans1}/>
        <div class="honeycomb-cell_title">Hotter Temperatures</div>
    </li>
    <li class="honeycomb-cell">
        <img class="honeycomb-cell_img" src={oceans2}/>
        <div class="honeycomb-cell_title">Rising Oceans</div>
    </li>
    <li class="honeycomb-cell">
        <img class="honeycomb-cell_img" src={risks}/>
        <div class="honeycomb-cell_title">More Health risks</div>
    </li>
    <li class="honeycomb-cell honeycomb_Hidden">
    </li>
</ul>

    </div>
  )
}

export default Themes