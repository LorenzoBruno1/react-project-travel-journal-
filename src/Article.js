import './App.css'

function Article (props){
    return (
        <div className="article-c">
            <div className="img-c">
                <img src={props.imageUrl} className="article--img" />
            </div>
            <div className="content-c">
                <h5 className="location">📍{props.location} 
                    <span className="googleMaps"><a href={props.googleMapsUrl}>View on google maps</a></span>
                </h5>
                <h1 className="content--title">{props.title}</h1>
                <p className="content--date">{props.startDate}-{props.endDate}</p>
                <p className="content--desc">{props.description}</p>
            </div>
        </div>
    )
}
export default Article