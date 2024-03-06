import { useEffect, useState } from "react";

import { CiLink } from "react-icons/ci";

import { getNews } from "../api";

/**
 * This component fetches the news data and renders the news widget.
 *
 * @returns {ReactNode} A React component that renders the news widget.
 */
const NewsWidget = () => {
    const [filter, setFilter] = useState("sports");
    const [news, setNews] = useState([]);
    const [err, setErr] = useState(null);
    /**
     * This effect fetches the news data based on the filter.
     */
    useEffect(() => {
        const fetchNews = async () => {
            setErr(null);
            try {
                const data = await getNews(filter);
                if (data.totalResults !== 0) {
                    setNews(data.results);
                }
            } catch (error) {
                setErr(error.message);
            }
        };
        fetchNews();
    }, [filter]);
    return (
        <div className="md:col-span-2 widget h-full">
            <h1 className="md:font-bold md:text-lg">News:</h1>
            <div className="flex gap-1 my-1 md:my-3 md:gap-3">
                <button
                    onClick={() => setFilter("sports")}
                    className={`filter-btn${
                        filter === "sports" ? " selected" : ""
                    }`}>
                    Sports
                </button>
                <button
                    onClick={() => setFilter("business")}
                    className={`filter-btn${
                        filter === "business" ? " selected" : ""
                    }`}>
                    Business
                </button>
                <button
                    onClick={() => setFilter("technology")}
                    className={`filter-btn${
                        filter === "technology" ? " selected" : ""
                    }`}>
                    Technology
                </button>
            </div>
            <div className="h-[65%] overflow-auto">
                {err && <p>{err}</p>}
                {err === null && news.length === 0 ? (
                    <p>No news</p>
                ) : (
                    <ul className="flex flex-col gap-1">
                        {news.map((newsData) => (
                            <li
                                key={newsData.article_id}
                                className="border-b-[1px] border-b-slate-400 py-1 mb-2 md:text-lg text-sm flex justify-between items-center">
                                <p>{newsData.title}</p>
                                <a href={newsData.link} target="_blank">
                                    <CiLink className="md:w-6 md:h-6 md:p-1 cursor-pointer" />
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default NewsWidget;
