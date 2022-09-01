function call() {
    a = () => {
        console.log('a')
        return this
    }
    b = () => {
        console.log('b')
        return this
    }
    c = () => {
        console.log('c')
    }
    return this
}

console.log(call().a().b().c())