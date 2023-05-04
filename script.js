async function buscaEndereco(cep) {  
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try { //ele vai tentar fazer tudo aquilo para captar o endereço, aquela lista que diz endereço, cidade, estado, etc. Senão, ele vai pegar o erro e mostrar na tela. ultilizando o catch
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) { //Se o cep não for encontrado ele vai pegar o erro e monstrar na console.log.
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade'); //busca os campos de cidade estado e etc.
        var estado = document.getElementById('estado');
        var logradouro = document.getElementById('logradouro');

        cidade.value = consultaCEPConvertida.localidade; //atribui o valor do consultaCEPConvertida que a gente buscou a atraves do cep e tras os dados e preenche os campos.
        logradouro.value = document.getElementById.logradouro;
        estado.value = document.getElementById.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}


var cep = document.getElementById('cep'); //peguei o id do elemento cep
cep.addEventListener("focusout", () => buscaEndereco(cep.value)); //adicionei um escutador de eventos que quando o focu sai do campo ele faz uma requisição do cep digitado e imprime no console.log






//const consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/') // Usei a API via cep para realizar uma verificação que irá automaticamente buscar o cep do usuario e preencher os campos de rua e bairro 
    //.then(resposta => resposta.json()) // devemos transformar os dados que chegam em json para assim poder ser lido pelo javaScript, Pois os dados chegam em formato de bytes e precisamos transformar em outro formato para manipulá-los.
    //.then(r => {
        //if (r.erro) {  // aqui eu irei aplicar um condicional se caso buscarmos o cep e não encontrarmos no console.log irá informar um erro peronalizado informando que o cep não foi encontrado.
            //throw Error('Esse cep não existe!') // Usando a propriedade throw error nos jogamos o erro com a mensagem no console.log
        //} else  //E o catch vai pegar aquele erro que eu coloquei. E caso não esteja incorreto, ele vai continuar, vai dar o else console.log(r) e imprimir sem mandar erro nenhum
           // console.log(r) 
    //})
    //.catch(erro => console.log(erro)) //  catch em português significa "pegue". Assim, caso aconteça algum erro, ele pega o erro e imprime na tela. Basicamente e isso a ultilidade dele.

    //.finally(mensagem => console.log('Processamento concluído')); //  O finally é literalmente a sua tradução também, sendo "Finalmente". Independente da resposta dessa promessa, ele vai imprimir o que colocarmos.
    
//console.log(consultaCEP);