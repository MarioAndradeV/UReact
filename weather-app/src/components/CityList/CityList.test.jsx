import React from 'react'
import {render, screen} from '@testing-library/react'
import CityList from './CityList' //SUT: Subject under testing ( objeto del testeo)

const cities = [
    {city:"Buenos Aires", country:"Argentina"},
    {city:"Bogotá", country:"Colombia"},
    {city:"Madrid", country:"España"},
    {city:"Ciudad de México", country:"México"},
]


test('CityList renders', async () => { 
    //AAA
    //Arrange organizar
    render(<CityList cities={cities} />)

    //Act

    const items = await screen.findAllByRole("listitem")

    //Assert

    expect(items).toHaveLength(4)
    


 })