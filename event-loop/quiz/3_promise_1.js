import axios from "axios";

const urls = ["https://www.google.com", "https://www.vaultinum.com", "https://www.github.com", "https://brilliant.org"];

async function runQueriesSync() {
    console.time("Loop fetching");
    const results = [];
    for (const url of urls) {
        console.log(`GET: ${url}`);
        const { status } = await axios.get(url);
        results.push({ url, status });
    }
    console.table(results);
    console.timeEnd("Loop fetching");
}
// runQueriesSync();

async function runQueriesAsync() {
    console.time("|| fetching?");
    const execResults = await Promise.allSettled(urls.map(url => {
        console.log(`GET: ${url}`);
        return axios.get(url); 
    }));
    console.table(execResults.map((result, i) => ({ url: urls[i], status: result.value.status })));
    console.timeEnd("|| fetching?");
}
runQueriesAsync();