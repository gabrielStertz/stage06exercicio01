const routes = {
  "/about": "/stage_06/exercicio_01/pages/about.html",
  "/": "/stage_06/exercicio_01/pages/home.html",
  "/contact": "/stage_06/exercicio_01/pages/contact.html",
  404: "/stage_06/exercicio_01/pages/404.html"
}
function route(event){
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)
  handle()
}
function handle(){
  const {pathname} = window.location // ele acha o pathname dentro do window.location (desestrutrar)
  const route = routes[pathname] || routes[404]
  fetch(route)
  .then(data => data.text())
  .then(html => {
    document.querySelector('#app').innerHTML = html
  })
}
handle()
window.onpopstate = () => handle()
window.route = () => route()