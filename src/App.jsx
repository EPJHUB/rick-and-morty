import axios from "axios"
import { getRandomNumber } from "./helpers/random"
import { useEffect } from "react"
import { useState } from "react"
import Location from "./components/Location"
import ResidentList from "./components/ResidentList"

const App = () => {
  const [locationInfo, setLocationInfo] = useState(null)
  useEffect(() => {
    const randomDimension = getRandomNumber(126)
    axios
    .get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
    .then(({data}) => {setLocationInfo(data)})
    .catch((error) => {console.log(error)})
  }, [])
  
  return (
    <main className="font-fira">
      <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo}/>
      <ResidentList residents={locationInfo?.residents ?? []}/>
    </main>
  )
}
export default App
