function print(data) {
    console.log(data)
}
print = print.bind(this,"hello world")

print = print.bind(this,"abcd")

print("fixing")

