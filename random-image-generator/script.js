const container = document.querySelector(".container")
const unsplashURL = "https://picsum.photos/200/300?random="
const rows = 5

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img")
  img.src = `${unsplashURL}${getRandomSize()}`
  container.appendChild(img)
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300
}

console.log("Random Image Generator Loaded", unsplashURL, rows)
