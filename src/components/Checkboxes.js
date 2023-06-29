import axios from 'axios'
import React, { useEffect } from 'react'




function Checkboxes({auto,setAuto,enabled,setEnabled,autoRefresh,setAutorefresh,setImg}) {
    useEffect(() => {
        if(enabled && auto){
          setAutorefresh(setInterval(() => {
             axios.get('https://api.thecatapi.com/v1/images/search')
             .then(resp => setImg(resp.data[0].url))
           }, 5000))
         }
         else{
           clearInterval(autoRefresh)
         }
    }, [auto,enabled])

    return(
        <>
            <div>
                <input type="checkbox" defaultChecked={enabled} onChange={() => setEnabled(!enabled)}/> Enabled
            </div>

            <div>
                <input type="checkbox" defaultChecked={auto} onChange={() => setAuto(!auto)}/> Auto-refrash every 5 seconds
            </div>
        </>
    )
}

export default Checkboxes