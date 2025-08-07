
//1. lam lai logic, tu gio se tinh toan ca day so luon, khong su dung toi result de tinh

//2. tach ra va tinh toan x / truoc, su dung findIndex de tim dau x / va tinh toan 2 so canh no, cuoi cung
// replace 3 index do bang result

//3. dung loop de tinh toan neu gap expr thi se tinh toan luon (do cach tren gap van de ve quy tac tinh toan: tu trai qua phai)

const evaluate = {
    _parser: (str) => {
        const result = str.split(/([+-×÷])/).filter(Boolean);
        if (result[0] === '-') {
            result.splice(0, 2, result[0] + result[1]);
        }
        return result;
    },

    _findX: (arr) => {
        if (!arr.includes('×')) {
            return arr;
        }
        const index = arr.indexOf('×');
        const a = parseInt(arr[index - 1]);
        const b = parseInt(arr[index + 1]);
        arr.splice(index - 1, 3, a * b);
        return evaluate._findX(arr);
    },

    _findD: (arr) => {
        if (!arr.includes('÷')) {
            return arr;
        }
        const index = arr.indexOf('÷');
        const a = parseInt(arr[index - 1]);
        const b = parseInt(arr[index + 1]);
        if (b === 0) {
            return 'Cannot divided by zero';
        }
        arr.splice(index - 1, 3, a / b);
        return evaluate._findD(arr);
    },

    _findS: (arr) => {
        if (!arr.includes('+')) {
            return arr;
        }
        const index = arr.indexOf('+');
        const a = parseInt(arr[index - 1]);
        const b = parseInt(arr[index + 1]);
        arr.splice(index - 1, 3, a + b);
        return evaluate._findS(arr);
    },

    _findM: (arr) => {
        if (!arr.includes('-')) {
            return arr;
        }
        const index = arr.indexOf('-');
        const a = parseInt(arr[index - 1]);
        const b = parseInt(arr[index + 1]);
        arr.splice(index - 1, 3, a - b);
        return evaluate._findD(arr);
    },

    calculate: (str) => {
        const arr = evaluate._parser(str);
        const findX = evaluate._findX(arr);
        const findD = evaluate._findD(findX);
        if (typeof findD === 'string') {
            return findD;
        }
        const findS = evaluate._findS(findD);
        const findM = evaluate._findM(findS);
        return findM[0];
    }

}

export default evaluate;