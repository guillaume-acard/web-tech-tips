const data = {
    first: "Scott",
    last: "Tiger"
}

const arrowTransform = (template, data) => {
    let value = template;
    Object.keys(data).forEach(key => {
        const regEx = new RegExp(`>${key}`, "g");
        value = value.replace(regEx, data[key]);
    })
    return value;
}

const arrow = (strings, data) => arrowTransform(strings[0], data);
console.log(arrow`Testing >first >last ${data}`);

const arrow2 = data => strings => arrowTransform(strings[0], data);
console.log(arrow2(data)`FullName= >first >last`);
const arrow3 = strings => data => arrowTransform(strings[0], data);
console.log(arrow3`Template 3= Mr >last >first`(data));

const highlight = (strings, ...values) => {
    let str = "";
    strings.forEach((string, i) => {
        str += i < values.length? `${string} <span class='highlight'>${values[i] || ""}</span>`: string;
    });
    return str;
}

console.log(highlight`Hello ${data.first} ${data.last}! Please to meet you.`);

const md = str => {
    let content = str[0];

    const testAndReplace = (regEx, tag) => {
        let match = null;
        while ((match = regEx.exec(content)) !== null) {
            content = `${content.substr(0, match.index)}<${tag}>${match[1]}</${tag}>${content.substr(match.index + match[0].length)}`
        }
    }
    testAndReplace(/^# (.*)$/gm, "h1");
    testAndReplace(/^## (.*)$/gm, "h2");
    testAndReplace(/\*([^*]+)\*/g, "strong");
    testAndReplace(/_([^_]+)_/g, "em");
    return content;
}

console.log(md`
# Header stuff
## sub header
*bold text* _after_ *big text* again
Ignore sub # header`)

// https://github.com/styled-components/styled-components
// https://github.com/skolmer/es2015-i18n-tag

// For proper english arrays
const and = ([first, ...more]) => {
	return first;
}

const test = [1, 2, and `test`];

console.log(test)
