import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import FireIcon from './FireIcon'
import Storms from './Storms'
import LocationInfoBox from './LocationInfoBox'

// define constants


const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
     
///
if (ev.categories[0].id = 8  ) {
            return <FireIcon  key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        
        }
        else if (ev.categories[0].id = 10  ) {
            return <Storms key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        
        }



        
        return 0


    })

    return (
        <div className="map">
            <GoogleMapReact
            ///Enter your google API key here 
                bootstrapURLKeys={{ key:'GoogleApi' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}
/// Default Map location "United States "
Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -100.
    },
    zoom: 4
}

export default Map
