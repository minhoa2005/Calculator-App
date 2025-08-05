export const calculate = (num, oldResult, expression) => {
    const splitted = num.split(expression);
    if (!isNaN(oldResult)) {
        if (!isNaN(parseInt(splitted[splitted.length - 1]))) {
            return parseInt(oldResult) + parseInt(splitted[splitted.length - 1]);
        }
        else {
            return parseInt(oldResult) + 0;
        }
    }
    else {
        if (isNaN(parseInt(splitted[1]))) {
            return parseInt(splitted[0]);
        }
        else {
            return parseInt(splitted[0]) + parseInt(splitted[1]);
        }
    }

}