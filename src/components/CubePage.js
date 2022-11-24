import CubeSlider from "./CubeSlider"

//Import images
import trainee from '../assets/images/lamu trainee and Mary.jpg'
import lamustory from '../assets/images/lamustory.jpg'
import lamupic from '../assets/images/lamupic.jpg'

const CubePage = () => {
  return (
    <>
    <CubeSlider images={[lamustory]}/>
    <CubeSlider images={[lamupic]}/>
    <CubeSlider images={[trainee]}/>
    </>
  )
}

export default CubePage