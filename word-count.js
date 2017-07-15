// Word Count

function Words() {}

const sanatize = (str) => {
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