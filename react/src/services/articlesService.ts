export interface Article {
    name: string;
    content: string;
}

const refArticles = [
    { name: "Article 1", content: "Best content ever!" },
    { name: "Bacon and eggs", content: "Best breakfast ever!" },
    { name: "42", content: "Answer to the Ultimate Question of Life, the Universe, and Everything!" },
    { name: "Top 10 ways to write React!", content: "This is totally not a click bait." },
    { name: "Article 5", content: "Lets hope we dont get to use it..." },
];
let refArticlesIndex = 0;

type Listener<T> = (data: T[]) => void;

let articles: Article[] = [];
let listener: Listener<Article> | null = null;

export function getArticles(onUpdate: Listener<Article>): () => void {
    listener = onUpdate;
    const handle = setInterval(() => {
        if (refArticlesIndex < refArticles.length) {
            onUpdate(articles);
            articles = [...articles, refArticles[refArticlesIndex]];
            // articles.push(refArticles[refArticlesIndex]); => QUIZ : Why not push the value to the list here?
            refArticlesIndex += 1;
        }
    }, 5000);
    return () => clearInterval(handle);
}

export function addArticle(name: string, content: string) {
    articles = [...articles, { name, content }];
    listener?.(articles);
}
