import {encoded, translations} from './data.js'

function decodeFields(encoded, translations) {
    let res = [];

    for (let i = 0; i < encoded.length; i++) {
        let obj = encoded[i];
        let decodedObj = {};

        for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];

            if (key.endsWith('Id')) {
            let field = key.slice(0, -2);
            if (translations.hasOwnProperty(value)) {
                decodedObj[field] = translations[value];
            } else {
                decodedObj[field] = value;
            }
            } else {
            decodedObj[key] = value;
            }
        }
        }

        res.push(decodedObj);
    }

    return res;
}

console.log(decodeFields(encoded, translations))
