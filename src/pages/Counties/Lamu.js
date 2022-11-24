import '../../assets/scss/county.scss'
import CubePage from '../../components/CubePage'

const Lamu = () => {
  return (
    <div className='county-page'>
      <div className='title-card'>
        <h3>Lamu</h3>
      </div>
      <div className='county-card'>
        <p><span>.</span>Trending</p>
        <div className='cube-sliders'>
        <CubePage/>
        </div>
        <div className='content'>
        <h3>Hotter temperatures & warming, rising oceans</h3>
        <hr />
        <p>
        The story of Hindu Mdariss, a fitness enthusiast helping women to swim against religious tides in Lamu.
        </p>
        <div className='youtube-video'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PXMJjGfVEms" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p>
        My name is Hindu, I am a women's leader in Lamu. Today I am here to talk to you about our Indian Ocean, which surrounds the people of Lamu. But what saddens us is that is the increased incidences of people sinking in boats. 
        <strong>The ones who die in most cases are women, because they do not know how to swim.</strong> Most of our women are disempowered. I lead swimming classes in Wuyoni beach area. 
        I teach women to swim. But it is difficult to teach them as they swim in kanzus/traditional wear. And some ridicule the swimming women, saying they don't have work to do. Of which it's sad as when an ocean accident occurs, women are the first ones to die. 
        Has religion denied us to swim? I have gone through our Koran and there is nothing like that. I have even asked our religious teachers to expound whether or not our religion forbids us from swimming. I have been well informed that a woman has equal rights to swim as a man. 
        <strong> As a woman, you just need to dress respectfully and you swim!</strong> Now I am requesting the government to allocate us a private swimming area so that more women can go through swimming training classes, as well as other life-skills. 
        But swimming will be a first priority as most of the ones who die when a boat capsizes are women.
        </p>
        </div>
      </div>
    </div>
  )
}

export default Lamu