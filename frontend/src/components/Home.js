import React from 'react';
import {Link} from "react-router-dom";


export default function Home(){
    return(
        <div>
            <div className='center'>
            <Link to="/add">Go to Create Iteam Page</Link>

            </div>

        </div>
    )
}