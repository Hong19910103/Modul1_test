let arr = [1, 4, 5, 6, 7, 8, 3, 5, 7, 4, 6, 9];
let sum = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        if (i % 2 === 0) {
            sum += arr[i]

        }
    }

}
document.getElementById("result").innerHTML = sum;