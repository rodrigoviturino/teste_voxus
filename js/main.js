$("input[type='text']").focus(function(){
    var $this = $(this); $this.parent().find('label').addClass('label-up');
    });
    $("input[type='text']").blur(function(){
      $this=$(this);
      if(!$this.val()){ $this.parent().find('label').removeClass('label-up');
      
      }
    });

// Form

// let btn_form = document.querySelector('.btn-form');
// btn_form.addEventListener('click' , (event) => {
//     event.preventDefault();
// });

// validation
$(document).ready(function () {
    $('#form-content').validate({
        // Regras
        rules: {
            name: {
                required:true,
                minlength:10
            },

            phone: {
                required: true,
                minlength: 14,
                maxlength:20,
                phone:true
            },
            email: {
                email: true,
                remote:true,
                required:true
            },
            company: {
                required:true,
                equalTo: true
            },
            site: {
                required:true,
                url:true
            },

        },
        submitHandler: function(form) {
            alert('Sucesso');
            form.submit();
        }
    });
});