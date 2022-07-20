const strigLength = (words) => {
    let length = words.length;
    if(length > 0 && length < 10){
        return length;
    }else{
        throw 'string must be more than 1 and less than 10';
    }
}

module.exports = strigLength;