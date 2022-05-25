var btnUsuario = document.getElementById('btn-usuario');

var navUsuario = document.getElementById('usuario'); 


btnUsuario.addEventListener('click', function() {
    navUsuario.classList.toggle('mostrar-usuario');
})


var btnLike = document.getElementById('btn-like');

var navLike = document.getElementById('like'); 


btnLike.addEventListener('click', function() {
    navLike.classList.toggle('mostrar-like');
})


var btnCarrito = document.getElementById('btn-carrito');

var navcarrito = document.getElementById('carrito'); 


btnCarrito.addEventListener('click', function() {
    navcarrito.classList.toggle('mostrar-carrito');
})

