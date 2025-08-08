
//1. lam lai logic, tu gio se tinh toan ca day so luon, khong su dung toi result de tinh

//2. tach ra va tinh toan x / truoc, su dung findIndex de tim dau x / va tinh toan 2 so canh no, cuoi cung
// replace 3 index do bang result

//3. dung loop de tinh toan neu gap expr thi se tinh toan luon (do cach tren gap van de ve quy tac tinh toan: tu trai qua phai)
// chay vong lap, tim kiem cac dau 

const evaluate = {
    _parser: (str) => {
        const result = str.split(/([+-×÷])/).filter(Boolean);
        if (result[0] === '-') {
            result.splice(0, 2, result[0] + result[1]);
        }
        return result;
    },

    _findX: (arr, index) => {

        const a = parseInt(arr[index - 1]);
        const b = parseInt(arr[index + 1]);
        arr.splice(index - 1, 3, a * b);
        return arr;
    },

    _findD: (arr, index) => {

        const a = parseInt(arr[index - 1]);
        const b = parseInt(arr[index + 1]);
        if (b === 0) {
            return 'Cannot divided by zero';
        }
        arr.splice(index - 1, 3, a / b);
        return arr;
    },

    _findS: (arr, index) => {

        const a = parseInt(arr[index - 1]);
        const b = parseInt(arr[index + 1]);
        arr.splice(index - 1, 3, a + b);
        return arr;
    },

    _findM: (arr, index) => {

        const a = parseInt(arr[index - 1]);
        const b = parseInt(arr[index + 1]);
        arr.splice(index - 1, 3, a - b);
        return arr;
    },

    calculate: (str) => {
        let arr = evaluate._parser(str);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '×') {
                arr = evaluate._findX(arr, i);
                i = 0;
                console.log(arr);
            }
            else if (arr[i] === '÷') {
                arr = evaluate._findD(arr, i);
                i = 0;
                console.log(arr);
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '+') {
                arr = evaluate._findS(arr, i);
                i = 0;
                console.log(arr);
            }
            else if (arr[i] === '-') {
                arr = evaluate._findM(arr, i);
                i = 0;
                console.log(arr);
            }
        }
        return arr[0];
    }

}

export default evaluate;