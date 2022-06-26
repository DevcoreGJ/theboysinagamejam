const countdown = document.querySelector(".countdown");

	
const interval = setInterval(() => {
  const deadline = new Date(2022, 06, 8, 00, 00);

  const current = new Date();

  const diff = deadline - current;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
  const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
  const seconds = Math.floor((diff / 1000) % 60) + "";

  countdown.innerHTML = `
  <div class = "container-fluid"> <div class="row row-no-gutters"> <div class="col-xs-3 col-sm-3 col-md-3"> <div data-content="Days">${days.length === 1 ? `0${days}` : days}</div></div>
	<div class="col-xs-3 col-sm-3 col-md-3"> <div data-content="Hours">${hours.length === 1 ? `0${hours}` : hours}</div></div>
	<div class="col-xs-3 col-sm-3 col-md-3"> <div data-content="Minutes">${ minutes.length === 1 ? `0${minutes}` : minutes}</div></div>
	<div class="col-xs-3 col-sm-3 col-md-3"><div data-content="Seconds">${seconds.length === 1 ? `0${seconds}` : seconds}</div></div></div></div>
`;

if(diff > 0){
document.getElementById('my-link').addEventListener('click', function(e) {
      console.log('Click happened for: ' + e.target.id);
      e.preventDefault();
      e.stopPropagation();
      return false;
});
document.addEventListener('contextmenu', event => event.preventDefault());
}

  if (diff < 0) {
    clearInterval(interval);
    countdown.innerHTML = "<h1>Here We Go!!!</h1>";
	var link = document.getElementById('my-link');
	document.body.style.color = 'blue';
  }

  document.querySelector(".reset").addEventListener("click", () => {
    clearInterval(interval);

    const divs = document.querySelectorAll(".countdown div");

    divs.forEach((div) => {
      div.innerHTML = "00";
    });
  });
}, 1000);

