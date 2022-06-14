import { useState, useEffect } from "react";
import NewsCard from './NewsCard'

const NewsList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=de&apiKey=')
            .then(res => res.json())
            .then(json => {
                setData(json.articles);
            })
    }, [])
    console.log(data)
    return (
        <div className="wrapper">
            {data.map((elt, key) =>
                <NewsCard
                    key={key}
                    image={elt.urlToImage}
                    title={elt.title}
                    description={elt.description}
                    date={elt.publishedAt}
                    read={elt.url}
                />
            )}
        </div>
    )
}

export default NewsList