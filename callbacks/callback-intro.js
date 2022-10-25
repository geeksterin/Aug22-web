// setTimeout(callback,5000)

// function callback() {
//     console.log('hey i got executed after 5 sec')
// }
function callback1() {
    let a = 2;
    console.log(a + 1);
    callback2(callback1)
}

function callback2(cb) {
    console.log('ta ra rum pum');
    cb();
}

setTimeout(() => {
    callback2(callback1);
}, 5000);