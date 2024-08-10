var ViaCepIntegration = Class.create();
ViaCepIntegration.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

    type: 'ViaCepIntegration',

    realizarRequisicao: function() {

        var cep = this.getParameter('sysparm_cep');

        var request = new sn_ws.RESTMessageV2();
        request.setHttpMethod('GET');
        request.setEndpoint('https://opencep.com/v1/${cep}.json');
		request.setStringParameterNoEscape('cep', cep)

        var response = request.execute();
        var body = response.getBody();

        return body;
    }
})