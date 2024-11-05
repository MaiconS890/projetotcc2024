const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

//para movimento de introdução
let mouseMoved = false;

const pointer = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
}
const params = {
    poibterNumber: 40,
    widthFactor: .3,
    mouseTrheshold: .6,
    spring: .4,
    friction: .5
};

const trail = new Array(params.pointsNumber);
for(let i = 0; i < params.pointsNumber; i++){
    trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
    }
}
window.addEventListener("click", e => {
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", e => {
    mouseMoved = true;
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", e => {
    mouseMoved = true;
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}

setupCanvas();
updateMousePosition(0);
window.addEventListener("resize", setupCanvas);

function update(t) {
    //para movimento de introdução
    
}