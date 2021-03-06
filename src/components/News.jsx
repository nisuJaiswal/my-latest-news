import NewsItem from "./NewsItem"
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import SpinnerComponent from "./SpinnerComponent";
import PropTypes from 'prop-types';


const News = ({ pageSize, country, category }) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState();

    useEffect(async function () {
        setLoading(true);
        const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3334616adccd4f8db590bdb240beff59&pageSize=${pageSize}`;

        const res = await fetch(URL);
        const data = await res.json();
        // console.log(data);
        setTotalResults(data.totalResults)
        setArticles(data.articles);
        setLoading(false)
    }, [])


    const handleNext = async () => {
        console.log("Next")

        if (!(page + 1 > Math.ceil(totalResults / 12))) {
            setLoading(true)
            const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3334616adccd4f8db590bdb240beff59&page=${page + 1}&pageSize=${pageSize}`;

            const res = await fetch(URL);
            const data = await res.json();
            // console.log(data);

            setPage(page + 1);
            setArticles(data.articles);
            setLoading(false);
        }
    }
    const handlePrev = async () => {
        setLoading(true)
        const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3334616adccd4f8db590bdb240beff59&page=${page - 1}&pageSize=${pageSize}`;

        const res = await fetch(URL);
        const data = await res.json();
        setPage(page - 1);
        setArticles(data.articles);
        setLoading(false)
    }


    return (
        <>
            <Container className="my-3">
                <h2 className='fs-1 text-md-center my-4'>Latest News</h2>
                {loading && <SpinnerComponent />}
                <Row>
                    {!loading && articles.map((article, key) => {
                        return (
                            <Col sm={12} md={4} key={article.urlToImage}>
                                < NewsItem title={article.title ? article.title.slice(0, 50) : ""} desc={article.description ? article.description.slice(0, 60) : ""} imgUrl={article.urlToImage ? article.urlToImage : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADDCAMAAACxkIT5AAAASFBMVEVUVFSoqKhOTk5RUVGrq6tzc3OZmZmFhYWwsLBMTEyXl5etra1vb29+fn6Li4uTk5NiYmJnZ2dbW1uhoaGAgIBeXl5ycnJsbGwxLNHVAAAEr0lEQVR4nO2cDZeiIBSG4V4ElQSVJv//P13ATPuY2Wlqzy7u+5wzk0l2uk9cQEOEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAaTO+H/3ZQz8GTfj9TWRK4svLd2Ko0B+rtDhQcwAEcwAEcwAEcwAEcwAEcwMGuHahuiYLMXbly9OXBcLBDBwwHcCDgIJfDARyI/9tBwzPNIweXwj07kK1Z0PeF+lLo9+xAqoWnC/fj4BXgAA7gAA7gAA7gAA7gAA7gAA7gAA7gAA7g4P90kK6a2ZnPL6Dt10EMXgbvuuowDcMwHarO+SDt1yL25CDG77tepMn4K/GZ6DsfPezfgbLBDCn6RwdFE4MJn2nYiQNl/dQ8jP9yIDeTf2xhFw6UcuM3bkZhGt2jlmEPDqwf6fdHZmj09/eAlO/A6v7GwNwSnm9Vug2Pen1roXQHSlZXWRCjF0N1dL7VWrfeHavYUfD1Kyqp9uTAtuPm8zOJg8vDgXPa59GS1GbirSgeW7sfB7Zr1iKi0yfDgDRwOGwtNN1WQskOlFxbgtjmmy/HQVaaTd9B/SYfCnagtNjE5H97YhDHEBtnQq9vVKwD6y8BpR7vO6eTatuL0qWXLNaBdUtTwGS+cXJ4DleZS0I0zpbtQJlFAQ3hmUsKKgxLVVjmLhXrYAmEzLM3/1pzObZwB/PHZvFUJViqwnlQwXtwcNXFPSFBzvmwBwd0+OnFRXVKEnbggF5YB8BWtAcHryhIw2wq38FrCnJNKN0BTa8uiGGn0vvGj9d/a1neo1QHP+oT7yTIsh28ETiAAziAAziAAziAAziAAzjYiwOsIclTePtSoqGwtUSxpiwAAABwQ5p8lx7m31wpTzjj607u/DRv8byT55/b0/a6gx9OYPz34aH1KWrXsWDhggyG+aDbjB5yeNP85EPQSUvZDhSP0ulg8h2za0+clm2n+FZt683tDM9/Hz5YeWRBMXQxqlBNnQw8GGNCMMb1+SWVTeu/uJFM7aaDryvmU51KKDimEGR0cKobPtTHo9O1L01CdFApkR2QDrEm06hcfGhav8xbj6dVnO9gGOqqSasF2TGGm0ryUaGTsTacbHIQs6GZ1nkphRAdNNJQjIbGOp/rkJEpy1u/WQkqZTqTC/OcJdvRlYNOLQ7yzs7+lUh+TnJQ1SmaGNeY90zp8cqB9ZFDE+ZdMQOaKwckj7Q6EGN9KKtdjA4oBRUdVHMIscr3tw6cc8nBvEgYaX/joLKbeiBEXdq5c3SQPrw2NNUf8567enDOhbUeXOdC/DPT6uCjHspzIOI3HB2IOq8UR+6uPZgTPBbkXaOtaMh5E5MgO4i1oLo4aIwqS8HsgAebvlEvx/ht9/XxsQPua5P6BS/jE3tsOJqYsoMoMahzv0BdaamQan6OuI7jAxGU6VzdpuBj0t86iC1+rbtjsLGq87F2nUlTnEmm0dVkcz3wvs0Tkwqjd5z/p7acu1b7ah47d+u3OZjzBvVOazPO0/i8blPu8DFdOaNjdNinoVQlCqsFifNAKD/weiFsO+6/bG7Ll01e/+ebQP/8JwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwB/gFh35K7dZjp9sAAAAASUVORK5CYII="} key={article.urlToImage} readMore={article.url} author={article.author} />
                            </Col>
                        )
                    })
                    }

                </Row>


            </Container>

            <div className='d-flex justify-content-around my-3 '>
                <Button className="fs-4" variant="dark" onClick={handlePrev} disabled={page <= 1}>&larr; Previous</Button>
                <Button className="fs-4" variant="outline-dark">{page}</Button>
                <Button className="fs-4" variant="dark" onClick={handleNext} disabled={page + 1 > Math.ceil(totalResults / 12)}>Next &rarr;</Button>
            </div>

        </>
    )
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}
export default News
