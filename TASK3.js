const capitalize = (string) => {
    let firstLetterCapitalize = string.charAt(0).toUpperCase();
    let remainLetters = string.slice(1);
    let completeLetters = firstLetterCapitalize + remainLetters;
    return completeLetters;
    }

    module.exports = capitalize;