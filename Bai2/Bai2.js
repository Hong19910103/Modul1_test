let a = parseInt(prompt("Nhập số thứ nhất"));
let b =parseInt(prompt("Nhập số thứ hai")) ;

function check(a, b) {
    let suma = 0;
    let sumb = 0;
    for (let i = 1; i <= a / 2; i++) {
        if (a % i === 0) {
            suma += a[i];
        }
    }
    for (let j = 1; j <= b / 2; j++) {
        if (b % j === 0) {
            sumb += b[j];
        }
    }
    if (suma === b && sumb === a) {
        return true;
    } else {
        return false;
    }
}

let result = check();
alert(result);
