/**
 * Validação Formulário
 */
$(document).ready(function () {
    $('#form-content').validate({
        // Regras
        rules: {
            name: {
                required:true
            },

            phone: {
                required: true
            },
            email: {
                email: true,
                remote:true,
                required:true
            },
            company: {
                required:true
            },
            site: {
                required:true,
                url:true
            },

        },
        submitHandler: function(form) {
            
            form.submit();
        }
    });
});

