const showHello = () => alert("Hello!");
window.showHello = showHello;

const renderPureDomExample = (id) => {
    const element = document.getElementById(id);
    // Manual way
    const title = document.createElement("h2");
    title.textContent = "Pure DOM component";
    element.appendChild(title);
    const p = document.createElement("p");
    p.textContent = "Pure Dom manipulation code";
    p.onclick = () => alert("You clicked me!");
    element.appendChild(p);

    // Hacky way
    const innerHTML = document.createElement("div");
    innerHTML.innerHTML = `
        <h2 onClick="showHello()">Another way to do it! id=${id}</h2>
        <p>Not very conventional, need ot be careful to js injections, but easy to do!</p>
    `

    element.appendChild(innerHTML);
}

export default renderPureDomExample;