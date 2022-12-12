const obj = {
    name: "bhavesh",
    organisation: {
        "name": "appbrew",
        "NOE": 18
    }
}

// const NOE = obj.organisation.NOE
const {organisation: {NOE}} = obj
console.log(NOE)