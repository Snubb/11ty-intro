const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async function () {
    try {
        let json = await Cache(`https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=${Math.floor(Math.random() * 100)}`, {
            duration: '1s', // 1 second
            type: 'json' // also supports "text" or "buffer"
        });
        return json;
    } catch (e) {
        console.log(e);
        return {};
    }
};