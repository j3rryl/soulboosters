import '../../assets/scss/stories.scss'
import Kenya from '../../components/Kenya'

const Stories = () => { 
  return (
    <div className='stories-page'>
      <div className='map-container'>
        <h3>What is happening in the country?</h3>
        <hr />
        <p>
        Kenya's economy is largely dependent on tourism and rainfed agriculture, both susceptible to climate change and extreme weather events. 
        Increasing heat and recurrent droughts contribute to severe crop and livestock losses, leading to famine, displacement, and other threats to human health and wellbeing. 
        Kenya's predominantly low-lying coastline and surrounding islands are at risk from sea level rise, with significant implications for the fisheries sector and storm surge protection. Agriculture is the leading source of greenhouse gas emissions in the country, largely driven by enteric fermentation from livestock.
        </p>
        <p>Click on a County below to read more.</p>
        <hr/>
        <Kenya className='kenya-map'/>
      </div>
    </div>
  )
}

export default Stories