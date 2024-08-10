function onLoad() {

    setTimeout(function() {
        var phoneMask = new IMask(top.document.getElementById('sp_formfield_contato'), {
            mask: '+{55} (00) 00000-0000',
            lazy: false
        });
    }, 100);
}

