function print() {
    console.log(this.a1, this.a2)
}

class demo {
    constructor(a,b) {
        this.a1 = a
        this.a2 = b
    }

    print = print
}

const d = new demo(12,13)
d.print()