import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>  {

const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(false)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)

 const capitalFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
document.title = `${capitalFirstLetter(props.category)} - News Monkey`


  const updateNews = async()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b58235f342a34ab6bd2bbc690c63f7e7&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }

  useEffect(() => {
    return () => {
      updateNews()
      }
  }, [])


//  const componentDidMount = async()=> {
//     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b58235f342a34ab6bd2bbc690c63f7e7&page=${props.page}&pageSize=${props.pageSize}`;
//      setLoading(true);
//      let data = await fetch(url);
//     let parsedData = await data.json();
//     setArticles(parsedData.articles);
//     setTotalResults(parsedData.totalResults)
//     setLoading(false)
    
//   }
//  handlePrevClick = async () => {
//    setPage(page - 1)
//     updateNews()
//   }
//   handleNextClick = async () => {
//     setPage(page + 1)
//     updateNews()
//   }
 const fetchMoreData = async ()=>{
  //  setPage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b58235f342a34ab6bd2bbc690c63f7e7&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
}
return (
         <>
     <div className="container my-3">
          <h2 className='text-center'> Top {capitalFirstLetter(props.category)} Headlines - News Monkey</h2>

          {loading && <Spinner />}
          <div className="container">
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", }}>
            {articles.map((element) => {
              return <div key={element.url} >
              <NewsItem source={element.source.name} author={element.author} time={element.publishedAt} Url={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} />
                </div>
              })}

            </div>
            </div>
          </InfiniteScroll>
          </div>




          {/* <div className="container my-5" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <NewsItem title="First News" description="desc" />
            <NewsItem title="First News" description="desc" />
            <NewsItem title="First News" description="desc" />
          </div> */}
        </div>
      </>
    )
  
}
News.defaultProps = {
  category: "science"

}
News.propTypes = {
  category: PropTypes.string

}

export default News