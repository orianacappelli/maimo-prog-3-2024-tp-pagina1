'use client'

import {useEffect, useState} from "react";
import axios from 'axios'

const FetchGrid = () => {
    const [albums, setAlbums] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{//cuando se monta el componente se va a ejecutar automaticamente esta funcion
        setLoading(true)
        const handleGetData = async () => {
            try{
                const response = await axios.get('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=The+Strokes&api_key=d659cc02b91f8569a8d3a3e95091db43&format=json')
                const data = response.data.topalbums.album;//get para obtener información
                setAlbums(data)
                setLoading(false)
                console.log('data', data) 
            } catch (error){
                console.log('erro', error)
            }
        };
        handleGetData();
    }, [])

    return(
        <div>
            {loading && <p>Fetching data</p>}
            {!loading && 
            albums.map((album, index) => <p key={index}>{album.name}</p>)}
        </div>
    )
}

export default FetchGrid