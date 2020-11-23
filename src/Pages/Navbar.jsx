import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


function Navbar() {
    return (
        <Wrapper>
            <div className="container nav-items">
                <Link to="/">Home</Link>
                <Link to="/page1">Page 1</Link>
                <Link to="/page2">page 2</Link>
                <Link to="/page3">page 3</Link>
            </div>
        </Wrapper>
    )
}

export default Navbar


const Wrapper = styled.div`

    padding: 1rem;
    background-color: #f5f5f5;

    
`;
