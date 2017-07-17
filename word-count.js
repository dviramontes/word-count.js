function Words() {
    return {
        count: function (value) {
            const words = value
                .trim()
                .toLowerCase()
                .replace(/[!@&$^%:.¿¡?]/g, '')
                .split(/'?[\s,]+'?/g)

            return words.reduce((acc, word) => {
                if(acc.hasOwnProperty(word)) {
                    acc[word]++;
                } else {
                    Object.defineProperty(acc, word, {
                        value: 1,
                        enumerable: true,
                        writable: true,
                    });
                }
                return acc;
            }, {});
        }
    };
}

module.exports = Words;