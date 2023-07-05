function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpeg")
    img.setAttribute(
      "alt",
      "foto de keverton gerada por IA, usando oculos, corrente, barba e dois predios ao fundo"
    )
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}
