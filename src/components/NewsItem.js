import React, { useEffect, useState, useCallback } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = useCallback(async () => {
        const url = https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=hi&country=in&apikey=64f2c0e32cf0ab58ad0bcc273fbd713c&page=${page}&pageSize=${props.pageSize};
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
        const url = https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=hi&country=in&apikey=64f2c0e32cf0ab58ad0bcc273fbd713c&page=${page + 1}&pageSize=${props.pageSize};
        let data = await fetch(url);
        let parsedData = await data.json();
        setPage(page + 1);
        setArticles(articles.concat(parsedData.articles));
    };

    return (
        <div style={{ marginLeft: "220px", padding: "20px" }}>
            <h1
                className="text-center"
                style={{
                    margin: "35px 0",
                    marginTop: "90px",
                    fontWeight: "bold",
                    fontSize: "2rem",
                    color: "#333",
                }}
            >
                {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines
                <div style={{
                    width: "100px",
                    height: "3px",
                    backgroundColor: "red",
                    margin: "10px auto",
                    borderRadius: "5px",
                }}></div>
            </h1>

            {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                    <Spinner />
                </div>
            )}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "10vh" }}>
                        <Spinner />
                    </div>
                }
            >
                <div className="container">
                    <div className="row">
                        {articles.map((article) => (
                            <div className="col-md-4" key={article.url}>
                                <div
                                    className="card my-3"
                                    style={{
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "10px",
                                    }}
                                >
                                    <img
                                        src={article.image}
                                        className="card-img-top"
                                        alt={article.title}
                                        style={{
                                            borderTopLeftRadius: "10px",
                                            borderTopRightRadius: "10px",
                                            height: "200px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "#333", fontWeight: "bold" }}>
                                            {article.title.length > 60
                                                ? article.title.slice(0, 60) + "..."
                                                : article.title}
                                        </h5>
                                        <p className="card-text" style={{ color: "#666" }}>
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
                                            style={{ fontWeight: "bold" }}
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