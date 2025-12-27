let duckies = 0;
const amount_points = document.getElementById("duckies");
const clicks = document.getElementById("click");

clicks.addEventListener('click', () =>{
    duckies++;
    amount_points.textContent = duckies;
});