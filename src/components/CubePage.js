import CubeSlider from "./CubeSlider"

//Import images
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

const CubePage = () => {
  return (
    <>
    <CubeSlider images={[lamustory, woman, poverty, risks]} timer={2500}/>
    <CubeSlider images={[lamupic, food, plants, oceans1]} timer={4500}/>
    <CubeSlider images={[oceans1, drought, oceans2,oceans3]} timer={3500}/>
    </>
  )
}

export default CubePage