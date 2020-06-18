// function botao_cadastro() {
//     var erros = validacao();
//         mensagem_erro.innerHTML = "";
        
//         if(erros.length > 0){
//           for(var i=0; i < erros.length; i++){
//               var erro = erros[i];
//               var li = document.createElement("li");
//               li.innerHTML = erro;
//               mensagem_erro.appendChild(li);
//           }
//         }else{
//            // Código que envia os dados
//           // para o BD
//         }       
//       }

//       function validacao(){
//         var erros = [];

//         if(!nomesobrenome.value){
//           alert("Prencher nome!");
//         }

//         if(!email.value ||
//             (email.value.search("@") == -1) ||
//             (email.value.search(".") == -1) ||
//             (email.value.search(" ") >= '')){
//           alert("O formato do email é: usuario@dominio.com");
//         }

//         return erros;
//       }
