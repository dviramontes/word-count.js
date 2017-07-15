// Word Count

function Words() {}

const sanatize = s => {
    const trim = s.trim();
    const alphanumeric = trim.replace(/[^a-zA-Z0-9 ]+/g, ' ');
    const str = alphanumeric.trim().split(' ').join();
    if (str.includes(',')) {
        return str.split(',');
    }
    return str.split(' ');
}

Words.prototype.count = (str) => {
    const words = sanatize(str);
    return words.reduce((acc, val) => {
        if (!acc[val]) {
            acc[val] = 1;
        } else {
            acc[val] += 1;
        }
        return acc;
    }, {});
}

module.exports = Words;