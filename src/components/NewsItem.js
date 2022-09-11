import React from 'react'

const NewsItem = (props) => {
    
    return (
        <div className='my-3 container' >

            <div className="card" style={{ width: "18rem" }}>
                <img src={!props.imageUrl ? "https://www.al.com/resizer/HVzA9DyBI71VcLOcip8je89ZC90=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/JMNMQGWCDZAP7GYOPSSZK5VVIA.PNG" :props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {props.title}<span style={{ zIndex: 1, left: "80%" }} class="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                        {props.source}
                        <span class="visually-hidden">unread messages</span>
                    </span></h5>
                    <p className="card-text">{props.description}</p>
                    <p> Published : {!new Date(props.time).toGMTString() ? "Unknown" : new Date(props.time).toGMTString()} </p>
                    <p>Author : {!props.author ? "Unknown" : props.author}</p>
                    <a href={props.Url} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm btn-primary">Show More</a>
                </div>
            </div>

        </div>
    )

}

export default NewsItem