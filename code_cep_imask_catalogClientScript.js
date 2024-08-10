function onLoad() {

    setTimeout(function() {
     var phoneMask = new IMask(top.document.getElementById('sp_formfield_cep'), {
         mask: '00000-000',
         lazy: false
     });
     
 }, 100);

}