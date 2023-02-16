import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {Image} from 'semantic-ui-react';
// import styles from  "./item.module.css"
import "./item.module.css"

function Post(props) {
    const router = useRouter();
    const {id} = router.query;
    const API_URL = `https://jsonplaceholder.typicode.com/photos/${id}`
    const [item, setItem] = useState() ;

    function getData() {
        axios.get(API_URL).then( res => {
            console.log(res.data) ;
            setItem(res.data) ;
        } )
    }
    useEffect( () => {
        if ( id )
            getData();
    }, [id])

    return (
        <div>
            <div className="itemDetail"></div>
            <div>
                Post:{id} <br/>
                {item && item.title}
                <Image src={ item && item.url}/>
            </div>
        </div>
    );
}

export default Post;
