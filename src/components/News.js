import React, { useEffect, useState, useCallback } from "react";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = useCallback(async () => {
        const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=hi&country=in&apikey=64f2c0e32cf0ab58ad0bcc273fbd713c&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }, [props.category, props.pageSize, page]);

    useEffect(() => {
        setPage(1);
        updateNews();
    }, [props.category, updateNews]);

    const fetchMoreData = async () => {
        const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=hi&country=in&apikey=64f2c0e32cf0ab58ad0bcc273fbd713c&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setPage(page + 1);
        setArticles(articles.concat(parsedData.articles));
    };

    return (
        <div
            style={{
                marginLeft: "220px",
                padding: "20px",
                background: "linear-gradient(to bottom right, #3b3b3b, #0d0d0d)", // Background gradient
                minHeight: "100vh",
            }}
        >
            <h1
                className="text-center"
                style={{
                    margin: "35px 0",
                    marginTop: "90px",
                    fontWeight: "bold",
                    fontSize: "2rem",
                    color: "#fff", // Changed to white to make it more visible
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                }}
            >
                {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines
                <div
                    style={{
                        width: "100px",
                        height: "3px",
                        backgroundColor: "#ff5e5e", // Changed underline color for contrast
                        margin: "10px auto",
                        borderRadius: "5px",
                    }}
                ></div>
            </h1>

            {loading && (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        height: "50vh",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Spinner />
                </div>
            )}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={
                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: "10vh" }}
                    >
                        <Spinner />
                    </div>
                }
            >
                <div className="container">
                    <div className="row">
                        {articles.map((article, index) => (
                            <div
                                className={`col-md-4 my-3`} // Adjusted to display 3 items per row
                                key={article.url}
                            >
                                <div
                                    className="card"
                                    style={{
                                        boxShadow:
                                            index === 0
                                                ? "0 8px 16px rgba(0, 0, 0, 0.3)" // Enhanced shadow on the first card
                                                : "0 4px 8px rgba(0, 0, 0, 0.15)",
                                        borderRadius: "10px",
                                        transform: index === 0 ? "scale(1.05)" : "none", // Make the first card bigger
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth scale and shadow transition
                                    }}
                                >
                                    <img
                                        src={article.image}
                                        className="card-img-top"
                                        alt={article.title}
                                        style={{
                                            borderTopLeftRadius: "10px",
                                            borderTopRightRadius: "10px",
                                            height: "200px", // Adjusted height for all articles
                                            objectFit: "cover",
                                            width: "100%", // Ensures the image stretches to fill the width of the container
                                        }}
                                    />
                                    <div className="card-body">
                                        <h5
                                            className="card-title"
                                            style={{
                                                color: "#111", // Darker color for the card title
                                                fontWeight: "bold",
                                                fontSize: "1rem",
                                                textOverflow: "ellipsis",
                                                overflow: "hidden",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {article.title.length > 60
                                                ? article.title.slice(0, 60) + "..."
                                                : article.title}
                                        </h5>
                                        <p className="card-text" style={{ color: "#444" }}>
                                            {article.description &&
                                                (article.description.length > 100
                                                    ? article.description.slice(0, 100) + "..."
                                                    : article.description)}
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                By {article.author || "Unknown"} on {new Date(article.publishedAt).toDateString()}
                                            </small>
                                        </p>
                                        <a
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-danger"
                                            style={{
                                                fontWeight: "bold",
                                                backgroundColor: "#ff5e5e", // Enhanced button color
                                                borderRadius: "5px",
                                            }}
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default News;
