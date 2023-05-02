const trafficLight = document.querySelector('#trafficLightContainer');
const trafficLightRed = document.querySelector('.traffic-light-red');
const trafficLightYellow = document.querySelector('.traffic-light-yellow');
const trafficLightGreen = document.querySelector('.traffic-light-green');

const colors = ['green', 'yellow', 'red'];

let currentColorIndex = 0;

const turnLightsOff = () => {
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('black');
}

trafficLight.addEventListener('click', () => {
    turnLightsOff();

    const currentColor = colors[currentColorIndex];
    const currentLight = document.querySelector('.traffic-light-' + currentColor);

    currentLight.style.background = (currentColor);
    currentColorIndex = currentColorIndex < 2 ? currentColorIndex + 1 : 0;
});