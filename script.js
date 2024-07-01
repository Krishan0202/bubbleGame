let clutter = "";

for (let i = 1; i <= 75; i++) {
  clutter += `<div class="bubble">${i}</div>`;
}

document.querySelector("#p-bottom").innerHTML = clutter;
