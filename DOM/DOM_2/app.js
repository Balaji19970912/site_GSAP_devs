const container1 = document.querySelector('#container')
let iconHeart = document.querySelector('i')

container1.addEventListener('dblclick', function() {
    iconHeart.style.transform = 'translate(-50%, -50%) scale(1)'
    iconHeart.style.opacity = 0.8
    setTimeout(function() {
        iconHeart.style.transform = 'translate(-50%, -50%) scale(0)'
    },2000)
    setTimeout(function() {
        iconHeart.style.opacity = 0
    },1000)
})
