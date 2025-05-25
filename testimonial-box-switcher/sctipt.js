const testimonialsContainer = document.querySelector(".testimonials-container")
const testimonial = document.querySelector(".testimonial")
const userImage = document.querySelector(".user-image")
const username = document.querySelector(".username")
const role = document.querySelector(".role")

const testimonials = [
  {
    name: "Finn el Humano",
    position: "Aventurero",
    photo:
      "https://media.fortniteapi.io/images/61921f8e2ac403a91e56af56c953d7f9/transparent.png",
    text: "He trabajado con cientos de desarrolladores HTML/CSS y tengo que decir que el primer lugar se lo lleva este tipo. Es un desarrollador increíble. Se enfoca en un código limpio y presta atención a los detalles. Me encantan los desarrolladores que respetan cada aspecto de un diseño bien pensado y hacen lo mejor para convertirlo en código. Él va más allá y transforma ARTE en PIXELES, sin errores, siempre."
  },
  {
    name: "Princesa Dulce",
    position: "Ingeniera Química",
    photo:
      "https://pm1.aminoapps.com/7039/9630eb7450e6cfbb07bd4b91804a193a218df740r1-400-400v2_00.jpg",
    text: "Este tipo es un desarrollador frontend increíble que entregó exactamente lo que necesitábamos. Hazte un favor y contrátalo, no te decepcionará el trabajo que entrega. Se esfuerza para asegurarse de que estés feliz con tu proyecto. ¡Sin duda volveré a trabajar con él!"
  },
  {
    name: "Marceline la Reina Vampiro",
    position: "Música y Artista",
    photo:
      "https://i.pinimg.com/736x/49/de/fe/49defe4e5b5d2371385a6159133e4d16.jpg",
    text: "Este tipo es un trabajador incansable. La comunicación fue excelente y siempre estuvo muy atento, algo difícil de encontrar en muchos freelancers. Definitivamente repetiremos con él."
  },
  {
    name: "Rey Helado",
    position: "Recepcionista del Reino Helado",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvDsVBqJY0n3Mo_z4Tr_bXK4tTA6wSqLR7A&s",
    text: "Este tipo hace todo lo posible por terminar el trabajo y hacerlo bien. Es la segunda vez que lo contrato y volveré a contratarlo en el futuro."
  },
  {
    name: "Jake el Perro",
    position: "Diseñador Gráfico",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6EYqZUdd1JqJjSVX5CLQB6QkRjtFFvVp5w&s",
    text: "Tenía mis dudas por lo apretado del plazo, pensé que no se podría hacer. Pero este tipo me demostró lo contrario. No solo entregó un trabajo sobresaliente, sino que lo hizo un día antes del plazo. Y cuando pedí unas revisiones, ¡las hizo en MINUTOS! Espero volver a trabajar con él y lo recomiendo totalmente. ¡Gracias de nuevo!"
  },
  {
    name: "BMO",
    position: "Contador",
    photo: "https://i.redd.it/6j6vqnpia9hc1.jpeg",
    text: "Este tipo es un diseñador y desarrollador frontend de primera categoría. Se comunica bien, trabaja rápido y entrega trabajo de calidad. ¡Hemos tenido suerte de trabajar con él!"
  },
  {
    name: "Flama",
    position: "Directora del Reino del Fuego",
    photo:
      "https://i.pinimg.com/564x/27/8f/6b/278f6b7e322af8b92bf21ba132ce3579.jpg",
    text: "Este tipo es un joven y talentoso profesional de TI, proactivo y responsable, con una fuerte ética de trabajo. Es muy bueno en conversiones de PSD a HTML y en tecnologías HTML/CSS. Aprende rápido, está deseoso de aprender nuevas tecnologías. Está enfocado y tiene buena dinámica para cumplir fechas y obtener resultados sobresalientes."
  }
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
