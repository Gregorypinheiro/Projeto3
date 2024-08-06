$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    $.validator.addMethod("doisNomesMinimo", function(value, element) {
        // Dividir o valor do campo em palavras
        var nomes = value.trim().split(" ");
        // Verificar se existem pelo menos dois nomes
        return nomes.length >= 2;
    }, "Por favor, insira pelo menos dois nomes.");

    $.validator.addMethod("onzeNumerosMinimo", function(value, element) {
        var numericValue = value.replace(/\D/g, '');
        return numericValue.length === 11;
    }, "Por favor, todos os onze digitos.");

    $('#cadastro-form').validate({
        rules: {
            nome: {
                required: true,
                doisNomesMinimo: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                onzeNumerosMinimo: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: {
                required:  'Por favor, insira seu Nome completo'
            },
            email: {
                required: 'Por favor, insira seu email',
                email: 'Por favor, insira um email válido'
            },
            telefone: {
                required: 'Por favor, insira seu telefone',
                onzeNumerosMinimo: 'Por favor, insira um telefone com 11 dígitos'
            },
            mensagem: {
                required: 'Por favor, digite sua mensagem'
            },
        },
        submitHandler: function(form) {
            console.log(form);
            alert('Formulário enviado com sucesso!');
            form.reset();
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    })
})

