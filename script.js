const container = document.getElementById('container');
const squares = 800;

for (let i = 0; i < squares; i++) {
  const innerDiv = document.createElement('div');
  innerDiv.className = "square";
  container.appendChild(innerDiv);

  innerDiv.addEventListener('mouseover', () => {
    innerDiv.style.backgroundColor = "rgb(29, 29, 29)";
    setTimeout(() => {
      innerDiv.style.backgroundColor = "";
    }, 1000);
  });
}
