
const NewsCard = (props) => {
    return (

        <article className="newsListCard">
            <div className="box">
                <div className="img-box">
                    <img src={props.image} alt="" />
                </div>
                <h2>{props.title}</h2>

                <p>{props.description}</p>
                <div className="dateAndButton">
                    <p>{props.date}</p>
                    <a href={props.read}>Read More</a>
                </div>
            </div>
        </article>

    )
}

export default NewsCard;