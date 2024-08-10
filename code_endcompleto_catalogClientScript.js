function onChange(control, oldValue, newValue, isLoading) {
    if (newValue == '') {
        g_form.clearValue('endereco_completo');
        return;
    }

    if (newValue) {
        var logradouro = g_form.getValue('logradouro');
        var numero = g_form.getValue('numero');
        var complemento = g_form.getValue('complemento');
        var bairro = g_form.getValue('bairro');
        var cidade = g_form.getValue('cidade');
        var estado = g_form.getValue('estado');
        var cep = g_form.getValue('cep');

        var endCompleto = logradouro + ', ' + numero + ', ' + complemento + ' - ' + bairro + ' - ' + cidade + '/' + estado + ' - CEP ' + cep;

		g_form.setValue('endereco_completo', endCompleto);

    }
}