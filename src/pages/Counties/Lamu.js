import '../../assets/scss/county.scss'
import CubePage from '../../components/CubePage'
import CubeSlider from '../../components/CubeSlider'

const Lamu = () => {
  return (
    <div className='county-page'>
      <div className='title-card'>
        <h3>Lamu</h3>
      </div>
      <div className='county-card'>
        <p><span></span>Trending</p>
        <div className='cube-sliders'>
        <CubePage/>
        </div>
        <div className='content'>
        <h3>Hotter temperatures & warming, rising oceans.</h3>
        <hr />
        <p>
        As greenhouse gases trap more energy from the sun, the oceans are absorbing more heat, resulting in an increase in sea surface temperatures and rising sea level. Changes in ocean temperatures and currents brought about by climate change will lead to alterations in climate patterns around the world. For example, warmer waters may promote the development of stronger storms in the tropics, which can cause property damage and loss of life. 
        The impacts associated with sea level rise and stronger storm surges are especially relevant to coastal communities.
        </p>
        </div>
      </div>
    </div>
  )
}

export default Lamu