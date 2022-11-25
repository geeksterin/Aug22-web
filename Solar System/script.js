// declaration of nodes
const errorMessage = document.getElementById("error_message");
const errorMessageContainer = document.getElementById(
    "error_message_container"
);
const informationContainer = document.getElementById("information_container");
const planetImage = document.getElementById("planet_image");
const weightInformationContainer = document.getElementById(
    "weight_information_container"
);
const planetInput = document.getElementById("planet_input");
const massInput = document.getElementById('mass_input');
const calculateWeightButton = document.getElementById('calculate_weight_button');
const planetName = document.getElementById('planet_name');
const weight = document.getElementById('weight')

// call the initialize function
init();

// declare the initialize function
function init() {
    errorMessage.innerText = "Please select a planet";
    // attach function to the eventlistener
    planetInput.addEventListener('change', selectPlanet);
    calculateWeightButton.addEventListener('click', calculateWeight)
}

function selectPlanet(event) {
    const value = event.target.value;
    if (!value) {
        informationContainer.style.display = 'none';
        errorMessageContainer.style.display = 'block';
        errorMessage.innerText = "Please select a planet";
    } else {
        errorMessageContainer.style.display = "none";
        informationContainer.style.display = "flex";
        planetImage.setAttribute(
            "src",
            `https://raw.githubusercontent.com/geeksterin/WebCurriculum/master/Advance%20Js/Day-04/Project%20image/${value}.png`
        );
        weightInformationContainer.style.display = 'none';
    }
}

function calculateWeight() {
    const massValue = massInput.value
    if (validateMass(massValue)) {
        weightInformationContainer.style.display = 'flex';
        planetName.innerText = planetInput.value
        weight.innerText = `${convertMassIntoWeight(massInput.value, planetInput.value)} N`
    } else {
        informationContainer.style.display = 'none'
        errorMessageContainer.style.display = 'block'
        errorMessage.innerText = 'Please provide a valid mass'

        setTimeout(() => {
            errorMessageContainer.style.display = 'none'
            informationContainer.style.display = 'flex'
        }, 3000)
    }
}

function validateMass(massValue) {
    return massValue ? !isNaN(massValue) : false
}

function convertMassIntoWeight(mass, planet) {
    return "30.00"
}
