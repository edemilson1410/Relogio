const currentTime = () => {
  const el = document.querySelector('div#text')

  let date = new Date() //habilitando função
  let hh = date.getHours()
  let mm = date.getMinutes()
  let ss = date.getSeconds()

  hh = hh < 10 ? `0${hh}` : hh // operador ternário
  mm = mm < 10 ? `0${mm}` : mm // operador ternário
  ss = ss < 10 ? `0${ss}` : ss // operador ternário

  let time = `${hh}:${mm}:${ss}` // Junção em uma variável dos scripts gerados.

  el.innerText = time //retornando para o html

  // alteração da cor de acordo com o horario
  if (hh < 18) {
    document.body.style.background = 'orange'
  } else {
    document.body.style.background = '#282828'
  }
}

currentTime()
setInterval(currentTime, 1000)
