function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de João Silveira pegando um tubo na praia de Regência, localizada no estado do Espírito Santo, Brasil."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de João Silveira dando uma rasgada de backside na praia do Rosa, localizada no estado de Santa Catarina, Brasil."
    )
  }
}
