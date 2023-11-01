const main = document.querySelector('#main')
const cusror = document.querySelector('.cursor')

main.addEventListener('mousemove', function (mousemoveEvent) {
    console.log(mousemoveEvent)
    cusror.style.top = mousemoveEvent.y+'px'
    cusror.style.left = mousemoveEvent.x+'px'
})