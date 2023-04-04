$('header button').click(function() {
    $('form').slideDown() ;
})

$('#cancel-button').click(function () {
    $('form').slideUp() ;
})

$('form').on('submit',function(e) {
    e.preventDefault() ;

    const newImgUrl = $('#new-img-url').val() ;
    const newItem = $(`<li style="display: none"></li>`) ;

    $(`<img src="${newImgUrl}" />
        <div class="overlay-img-link">
        <a href="${newImgUrl}" target="_blank" title="Ver imagem em tamanho real">
        Ver imagem em tamanho real
        </a></div>`).appendTo(newItem) ;

    $(newItem).appendTo('ul') ;
    $(newItem).fadeIn(1000) ;
    $('#new-img-url').val('') ;
})
