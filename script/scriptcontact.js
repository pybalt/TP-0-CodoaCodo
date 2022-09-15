
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#mail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:espinosaflorezsarah@gmail.com?subject=Nombre: ${form.get('name')}  Correo: ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}
