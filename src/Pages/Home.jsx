import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import Posts from '../Components/Posts';
import HomePagination from '../Components/HomePagination';


function Home() {
    const [posts, setPosts]=useState([]);
    const[loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage]=useState(1);
    const [postsPerPage, setPostsPerPage] =useState(10);


    useEffect(()=>{
        const fetchPosts = async () => {
            setLoading(true)
            const res = await Axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(res.data);
            setLoading(false)
        } 

        fetchPosts();
    },[]);


   // get current post 
    const indexOfLastPage = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    
    // NextPage
    const nextPage = () => {
        console.log('next page')
    }

    // PrevPage
    const prevPage = () => {
        console.log('prev page')
    }


    // Posts on current page
    const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);
    
    // Current page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="container">
            <Posts 
                posts={currentPosts} 
                loading={loading}
            />
            
            <HomePagination 
                postsPerPage={postsPerPage} 
                totalPages={posts.length} 
                paginate={paginate} 
                nextPage={nextPage} 
                prevPage={prevPage} 
            />
        </div>
    )
}

export default Home
