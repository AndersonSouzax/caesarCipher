//ALGORITMO CIFRA DE CÉSAR

//Criptografar
/* No pior caso, a rotação será igual o tamanho da mensagem */
/* @direction: direção da rotação: 0 = esquerda, 1 = direita */
/* Assumindo o alfabeto maiúsculo brasileiro */
function encrypt(direction, rotation, message){

    if( rotation > 25 ){ rotation = 25; }
    if(!message || message.trim() == ''){
        return '';
    }

    //Transformando em Array
    var messageArray = message.toUpperCase().split('');

    var cipheredMessage = '';
    var alphabet = ['A','B','C','D','E','F','G','H','I','J',
                    'K','L','M','N','O','P','Q','R','S','T','U',
                    'V','W','X','Y','Z'];
    var i = 0,j = 0, index = 0, size = messageArray.length;
    
    //Iterando a mensagem
    for(i; i < size;i++){
        
        if(!messageArray[i] != ' '){

            //Iterando o alfabeto
            for(j=0;j < alphabet.length;j++){

                if(alphabet[j] == messageArray[i]){
                    
                }
            }

        }

        cipheredMessage += ' ';
    }

    return cipheredMessage;
}
