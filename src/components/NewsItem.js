import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title,description,urlToImage,newsUrl, author, date,source} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div className='position-absolute d-flex justify-content-end end-0'>
                        <span class="badge rounded-pill bg-danger" >{source}</span>
                    </div>
                    <img src={!urlToImage?"https://media.cnn.com/api/v1/images/stellar/prod/230209114858-spy-baloon-020423.jpg?c=16x9&q=w_800,c_fill":urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-txt'><small className='text-muted'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem