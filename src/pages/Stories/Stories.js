import '../../assets/scss/stories.scss'
import kenya from '../../assets/icons/kenya.svg'

const Stories = () => {
  return (
    <div className='stories-page'>
      <div className='map-container'>
        <img className='kenya-map' src={kenya}/>
      </div>
    </div>
  )
}

export default Stories