import Map from './components/Map'
import { useState, useEffect} from 'react'
import LoadScreen from './components/LoadScreen'
import Header from './components/Header'

 function App() {

   const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    const fetchEvents = async ( ) => {
      setLoading(true)
      //improt Nasa  Data Api  
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      

      const {events} = await res.json()

      setEventData(events)
      setLoading(false)



    }
    ///Calls Nasa API 
    fetchEvents()

   // console.log(eventData);
  }, [])

  return (
    <div>

      <Header />
     { !loading ? <Map eventData={eventData} /> : <LoadScreen />}
    </div>
  );
}

export default App;
