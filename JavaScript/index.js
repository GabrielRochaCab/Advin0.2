var numberTofind = 0;
var attemps = 0;

function gerator(){
    //aqui gera-se um númeor aleatório

    numberTofind = parseInt(Math.random() * 100);

    console.log(numberTofind)
}

    function verifynumber(){
        //Verificará se o número digitado é o mesmo gerado pelo 'gerator'
        var bet = document.getElementById('bet').value;

        if( bet > 100 || bet < 1)
        {
            alert('Número inválido');
            return;
        }

        if(bet > numberTofind)
        {
            alert('HA HA, meu número é MENOR!');
        }

        else if(bet < numberTofind)
        {
            alert('HE HE, meu número é MAIOR!');
        }
         
        else
        {
            alert('Parabens! achei que não iria acertar hoje!');
            gerator();
        }

    }   
        
       
      gerator();