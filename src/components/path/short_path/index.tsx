import React from 'react'
import ShortPathType from '../../../types/ShortPath'
import LogoSVG from '../../../assets/logo.svg' 
import AppConstants from '../../../constants/AppConstants'
import './styles.css'

const ShortPath: React.FC<{
    shortPath: ShortPathType
    key?: React.Key
}> = ({
    shortPath,
    key
}) => {
    return (
        <div className='short-path' key={key}>
            <img alt={AppConstants.LOGO_ALT} src={LogoSVG} />
            <div className='short-path--data'>
                <p>De: {shortPath.originCity}</p>
                <p>Para: {shortPath.destinyCity}</p>
                <p>Distância: {shortPath.distance} km</p>
            </div>
        </div>
    )
}

export default ShortPath