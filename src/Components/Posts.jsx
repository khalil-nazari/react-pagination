import React from 'react'
import styled from 'styled-components';



const Posts = ({posts, loading}) => {

    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }


    return (
        posts.map(post => (
            <Wrapper key={post.id}>
                <div className="card-title">
                    <h2>{post.title}</h2>
                </div>

                <div className="card-body">
                    {post.body}
                </div>
            </Wrapper>
        ))
        
    )
}

export default Posts


const Wrapper = styled.div `
    border:1px solid #d6d6d6;
    margin-bottom: 1rem;
    margin-top: 2rem; 
    margin-bottom:2rem;
    .card-title {
        background-color:#d6d6d6;
        padding: 15px 10px; 
    }

    .card-body {
        padding: 10px;
        font-size: 1.2rem;
    }
`;
