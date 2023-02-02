import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' //SUT: Subject under testing ( objeto del testeo)

test('CityInfo render', async () => { 
    //AAA
    //Arrange organizar
    //Act
    const city = "Buenos Aires"
    const country = "Argentina"

    //Renderiza el componente y retorna una serie de funciones, Rol es todos los Inputs o todos los textbox etc.
    const { findAllByRole } = render(<CityInfo city= {city} country = {country}/>)


    //Assert 
    //FinfallByRole nos va a buscar en este caso todos los componentes que sean "heading" => h1 h2 etc. y el resultado es un array
    const cityAndCountryComponents = await findAllByRole("heading")

    //Cuando el test es correcto?
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)


 })