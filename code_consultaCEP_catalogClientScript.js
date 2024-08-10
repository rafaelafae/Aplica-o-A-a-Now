function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    var getCEP = newValue.replace(/[-]/g, "");

    var obterCEPAjax = new GlideAjax('ViaCepIntegration');
    obterCEPAjax.addParam('sysparm_name', 'realizarRequisicao');
    obterCEPAjax.addParam('sysparm_cep', getCEP);
    obterCEPAjax.getXMLAnswer(callback);

    function callback(response) {
        var answer = response;

        if (answer) {
            try {
                var cepData = JSON.parse(answer);

                if (cepData.logradouro) {
                    g_form.setValue('logradouro', cepData.logradouro);
                } else {
                    g_form.clearValue('logradouro');
                }

                if (cepData.bairro) {
                    g_form.setValue('bairro', cepData.bairro);
                } else {
                    g_form.clearValue('bairro');
                }

                if (cepData.localidade) {
                    g_form.setValue('cidade', cepData.localidade);
                } else {
                    g_form.clearValue('cidade');
                }

                if (cepData.uf) {
                    g_form.setValue('estado', cepData.uf);
                } else {
                    g_form.clearValue('estado');
                }

            } catch (e) {
                g_form.clearValue('cep');
                g_form.showFieldMsg('cep', 'Erro ao processar a resposta da API. Tente novamente.', 'error');
            }
        } else {
            g_form.clearValue('cep');
            g_form.showFieldMsg('cep', 'Digite um CEP válido', 'error');
        }
    }
}
