import React, { useContext, useEffect, useRef, useState } from 'react'
import Request from '../../Services/posts-request';
import { LimitContext } from '../../Store/page-limit';
import Loader from '../Loader/Loader';
import './Post.css'


const Post = () => {

    const {limit,addLimit} = useContext(LimitContext);
    const [data,setData] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const postRef = useRef();

    useEffect(() => {
        if(limit!==0){
            Request(limit).then(newData => {
                console.log(newData)
                setData(newData);
                setLoading(prev => !prev)
            });
        }
    },[limit])


    const handleScroll = e => {
        if (postRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = postRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
              if(limit!==0){
                setLoading(true);
                addLimit();
              }
            }
          }
    }

    
    return (
            <div onScroll={handleScroll} className="post-container" ref={postRef}>
                {
                    data.map((post,id) => 
                        <div key={id} className="post-card">
                            <h3>
                                {post.title}
                            </h3>
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
