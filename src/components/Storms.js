import { Icon } from '@iconify/react'

import locationIcon from '@iconify/icons-mdi/hurricane'
/// Storm Icon
const Storms = ({ lat, lng, onClick }) => {
    return (
        <div className="Storms" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" 
            />
        </div>


    )
}

export default Storms
