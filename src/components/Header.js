import { Icon } from '@iconify/react'

import Icon2 from '@iconify/icons-mdi/hurricane'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={Icon2} /> Wildfire & Natural Disaster Tracker (Data from NASA)</ h1 >
        </header>
    )
}

export default Header
