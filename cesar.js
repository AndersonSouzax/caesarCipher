//ALGORITMO CIFRA DE CÉSAR

//Criptografar ou Descriptografar
/* No pior caso, a rotação será igual o número de letras no alfabeto - 1 */
/* @direction: direção da rotação: 0 = esquerda, 1 = direita */
/* Assumindo o alfabeto maiúsculo brasileiro */
function encrypt(direction, rotation, message, decrypt){

    //Tratamentos simples
    if( rotation > 25 ){ rotation = 25; }
    if(!message || message.trim() == ''){
        return '';
    }

    //Ao descriptografar muda-se apenas a direção
    if(decrypt){ direction = !direction; }

    //Transformando em Array
    var messageArray = message.toUpperCase().split('');

    var cipheredOrNormalMessage = '';
    var alphabet = ['A','B','C','D','E','F','G','H','I','J',
                    'K','L','M','N','O','P','Q','R','S','T','U',
                    'V','W','X','Y','Z'];
    var i = 0,j = 0, index = 0, size = messageArray.length, dif = 0;
    
    //Iterando a mensagem
    for(i; i < size;i++){
        
        if(messageArray[i] != ' '){

            //Iterando o alfabeto
            for(j=0;j < alphabet.length;j++){

                if(alphabet[j] == messageArray[i]){
                    
                    //ROTAÇÃO À ESQUERDA
                    if(!direction){
                        dif =  j - rotation;
                        index = dif < 0 ? 26 - Math.abs(dif) : dif;
                    
                    //ROTAÇÃO À DIREITA
                    }else{

                        dif = j + rotation;
                        index = dif > 25 ? dif - 26 : dif;
                        
                    }
                    cipheredOrNormalMessage += alphabet[index];
                    break;
                }
            }

        }else{
            cipheredOrNormalMessage += ' ';
        }     
    }
    //Imprimindo mensagem
    document.getElementById('enc-box').innerHTML = cipheredOrNormalMessage;

    return cipheredOrNormalMessage;
}

function getInfoAndDec(){

    var message = document.getElementById('box').value;
    var direction = document.getElementById('select-direction').selectedIndex;
    var cripto = document.getElementById('select-cripto').selectedIndex;
    var rotation = parseInt(document.getElementById('rotation').value);
    encrypt(direction,rotation,message,cripto);
}