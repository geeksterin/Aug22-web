const informationContainer = document.getElementById("information_container");
const errorMessageContainer = document.getElementById(
    "error_message_container"
);
const planetImage = document.getElementById("planet_image");
const planetInput = document.getElementById('planet_input');

planetInput.addEventListener('change', selectPlanet)

function selectPlanet(event) {
    const value = event.target.value;
    if (!value) {
        informationContainer.style.display = "none";
        errorMessageContainer.innerText = "Please select planet";
        errorMessageContainer.style.display = "block";
    } else {
        informationContainer.style.display = "flex";
        //TODO: hide weight info container if mass is empty string
        planetImage.setAttribute(
            "src",
            `https://raw.githubusercontent.com/geeksterin/WebCurriculum/master/Advance%20Js/Day-04/Project%20image/${value}.png`
        );
        errorMessageContainer.style.display = "none";
    }
}
