import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const renderCityAndCountry = cityAndCountry =>{
  const { city, country } = cityAndCountry

  return (
    <li key={city} >
    <Grid container 
        justify="center"
        alignItems="flex-start"
    >
        <Grid item
            md={8}
            xs={12}>
            <CityInfo city={city} country={country} />
        </Grid>
        <Grid item
            md={4}
            xs={12}>
            <Weather temperature={10} state="sunny" />
        </Grid>
    </Grid>
</li>
  
  )

}

//cities: es un array con la ciudad y su country
const CityList = ({cities}) => {
  return (
    <ul>
        {
          cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
        }
    </ul>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default CityList