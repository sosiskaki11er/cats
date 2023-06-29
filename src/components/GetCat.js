import axios from 'axios'
import React from 'react'
import { styled } from 'styled-components'

const Button = styled.button`
    height:50px;
`

function GetCat({enabled, setImg}) {

    const HandleClick = () => {
        if(enabled){
            axios.get('https://api.thecatapi.com/v1/images/search')
            .then(resp => setImg(resp.data[0].url))
        }
    }

    return (
    <Button onClick={HandleClick}>GET CAT</Button>
    )
}

export default GetCat