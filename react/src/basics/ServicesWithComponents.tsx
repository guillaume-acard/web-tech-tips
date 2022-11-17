import React, { useEffect, useState } from "react";
import { Article, getArticles, addArticle } from "../services/articlesService";

export default function ServicesWithComponents() {
    const [articles, setArticles] = useState<Article[] | undefined>();

    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => getArticles(setArticles), []);

    function postNewArticle() {
        addArticle(name, content);
        setName("");
        setContent("");
    }

    return (
        <div>
            <h2>Using services within components</h2>
            <div>
                <h2>Post new article</h2>
                <form
                    style={{ display: "flex", flexDirection: "column" }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        postNewArticle();
                    }}
                >
                    <input type="text" style={{ width: "100%" }} placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
                    <textarea style={{ width: "100%" }} placeholder="Content..." value={content} onChange={(e) => setContent(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
                <h2>Articles</h2>
                {!articles && <>Loading articles...</>}
                {articles && !articles.length && <>No articles published!</>}
                {articles?.map(({ name, content }) => (
                    <div key={name} className="article">
                        <h3>{name}</h3>
                        <p>{content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
