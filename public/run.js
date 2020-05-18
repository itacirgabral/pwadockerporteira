if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log('sw registered'))
      .catch(console.error)
  })
}

document.getElementById('buttonConsultar').onclick = e => {
  e.target.disabled = true
  fetch('consultabanco').then(res => res.json()).then(data => {
    const frag = new DocumentFragment()
    data.forEach(el => {
      lel = document.createElement('li')
      lel.innerText = el.mensagem
      frag.appendChild(lel)
    })
    e.target.remove()
    document.getElementById('ulResultadoConsulta').appendChild(frag)
  }).catch( err => {
    console.error(err)
    e.target.disabled = false
  })
}