import React from 'react'
import Nav from "../Nav/Nav"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeState } from '../../Redux/actions'

export default function Locations(props) {

    const { locations, episodes } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div>Soy el location
            <h1>{locations[0]}</h1>
            <button onClick={() => dispatch(changeState('Soy otro location'))}>
                Click me
            </button>

        </div>
    )
}
