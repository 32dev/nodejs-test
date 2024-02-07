function getTimeFormat(time) {
    let m = parseInt(time / 60);
    let s = time % 60;
    return (m + "").padStart(2, "0") + ":" + (s + "").padStart(2, "0");
}
console.log(getTimeFormat(123));