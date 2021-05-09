
import axios from 'axios'
import React, { useEffect } from 'react'

function Row(fetchUrl) {

    useEffect(() => {
        axios.get("").then((res)=>{
            console.log(res);
        })
     }, [fetchUrl])

    return (
        <div>
            <div>
                <p>

                </p>
                <p>
                    
                </p>
            </div>
        </div>
    )
}

export default Row
