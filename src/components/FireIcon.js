import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/warning'
/// file for the disaster warning

const FireIcon = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" 
            />
        </div>


    )
}

export default FireIcon
