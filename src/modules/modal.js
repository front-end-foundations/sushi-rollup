// var modal = document.querySelector(".modal");
// var modalOuter = document.querySelector(".modal-outer");

// export function showPopover(event) {
//   if (!event.target.matches(".beta, .closer")) return;
//   modalOuter.classList.toggle("open");
//   event.preventDefault();
// }
var modalOuter = document.querySelector(".modal-outer");
var modalInner = document.querySelector(".modal");

var betaContent = `
  <h3>Hi! I'm a Modal Window (ʘ‿ʘ)╯</h3>
  <p>Information about the beta program.</p>
  <a class="closer" href="#0">✖︎</a>
`;

var buttonContent = `
<h2>Coming Soon</h2>
<p>This feature coming soon.<p>
<a class="closer" href="#0">✖︎</a>
`;

export function showPopover(event) {
  if (event.target.matches(".beta")) {
    modalInner.innerHTML = betaContent;
    modalOuter.classList.add("open");
  } else if (event.target.closest("nav ul")) {
    modalInner.innerHTML = buttonContent;
    modalOuter.classList.add("open");
  } else if (event.target.matches(".closer, .modal-outer")) {
    modalOuter.classList.remove("open");
  } else return;
  event.preventDefault();
}
