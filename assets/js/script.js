
var totales, i;
var imagen = [];
var img = '<img class="m-2" src="url" alt="" width="300" heigh="300">';

  $('.fondo').hide()

  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://api.qwant.com/api/search/images?count=20&offset=1&q=forests',
    type: 'GET',
  }).done(function(respuestas) {
    totales = respuestas.data.result
    console.log('A')


    $(document).ready(function() {

      for(i=0; i<20; i++){
        var image =  img.replace('url', totales.items[i].media)
        $('.imagenes').append(image)
          $('img').click(function(){


           $('#ampliada').attr('src', $(this).attr('src'));
            $('.fondo').fadeIn().show();
            })
        }
    })
    $('.fondo').click(function() {
      $('.fondo').fadeOut();
    });
  });
