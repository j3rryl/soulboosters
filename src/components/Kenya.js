import { ReactComponent as KenyaMap } from '../assets/icons/kenya.svg'
import {useNavigate} from 'react-router-dom'
import {useEffect, useState } from 'react'
import '../assets/css/kenya.css'
const Kenya = () => {
  const [svgText, setSvgText] = useState(null);
  let navigate = useNavigate()
  useEffect(() => {
      fetch(KenyaMap)
          .then(res => res.text())
          .then(svgText => setSvgText(svgText))
  }, [svgText]);
  function toggleCounty(event){
    const county_name= event.target.getAttribute('id')
    if(county_name==="KE-21"){
      console.log("Lamu")
      navigate('./lamu')
    }
    console.log(county_name)
  }
  return (
    <KenyaMap onClick={toggleCounty}/>
  )
}

export default Kenya