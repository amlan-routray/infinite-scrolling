import React, { useContext, useEffect, useRef, useState } from 'react'
import Request from '../../Services/posts-request';
import { LimitContext } from '../../Store/page-limit';
import Loader from '../Loader/Loader';


const Post = () => {

    const {limit,addLimit} = useContext(LimitContext);
    const [data,setData] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const containerRef = useRef();

    useEffect(() => {
        Request(limit).then(newData => {
            console.log(newData)
            setData(newData);
            setLoading(prev => !prev)
        });
    },[limit])


    const handleScroll = e => {
        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
              // TO SOMETHING HERE
              console.log('Reached bottom')
            }
          }
        
    }

    
    return (
        <div onScroll={handleScroll} ref={containerRef}>
            {
                data.map((post,id) => 
                    <div key={id}>
                        <h1>
                            {post.title}
                        </h1>
                        <p>
                            {post.body}
                        </p>
                        <img src={post.src}/>
                    </div>
                )
            }
            {isLoading &&  <Loader/>}
        </div>
    )
}

export default Post
