// $("input[type='text']").focus(function(){
//     var $this = $(this); $this.parent().find('label').addClass('label-up');
//     });
//     $("input[type='text']").blur(function(){
//       $this=$(this);
//       if(!$this.val()){ $this.parent().find('label').removeClass('label-up');
      
//       }
//     });


    let form = document.getElementById('form-content');
    let input = form.querySelectorAll('input');
    let btn_hidden = document.getElementById('tt');
    
    let btn = form.querySelector('#btn-submit');
        
    btn.addEventListener('click', function(event){
        event.preventDefault();

        
            input.forEach((ss) => {
                console.log('enviado');                        
            })
        

        input.forEach( (a) => {
            if(a == ''){
                console.log('vazio');                
            } else {
            
            }
        });
        
    });
    
    


// validation
// $(document).ready(function () {
//     $('#form-content').validate({
//         // Regras
//         rules: {
//             name: {
//                 required:true,
//                 minlength:10
//             },

//             phone: {
//                 required: true,
//                 minlength: 14,
//                 maxlength:20,
//             },
//             email: {
//                 email: true,
//                 remote:true,
//                 required:true
//             },
//             company: {
//                 required:true
//             },
//             site: {
//                 required:true,
//                 url:true
//             },

//         },
//         submitHandler: function(form) {
            
//             form.submit();
//         }
//     });
// });