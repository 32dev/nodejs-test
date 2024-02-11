function taskA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('A');
            resolve("A success");
        }, 1000);
    })
}
function taskB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('B');
            resolve("B success");
        }, 1500);
    })
} function taskC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('C');
            resolve("C success");
        }, 2000);
    })
}
Promise.all([taskA(), taskB(), taskC(), taskA()])
    .then((res) => {
        console.log("성공:" + res);
    })
    .catch((err) => {
        console.log("실패:" + err);
    });