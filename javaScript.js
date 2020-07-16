// 6.1 variáveis e constantes, quero exemplos.

    // variáveis, constantes

        // Explicação:
            /*
                Variáveis:
                    são endereços de memória nomeados que temporariamente
                    armazenam dados que podem mudar enquanto o program roda;

                Constantes: 
                    são endereços de memória nomeados que temporariamente
                    armazenam dados que não podem ser alterados enquanto o program roda;
            */

        // Exemplos:
            var x = 1; // x é um nome para um endereço da memória que armazena o valor 1
            x = 2;     // x é uma variável, e aqui é atribuido um outro valor a ela.

            const y = 2; // armazena o valor 2 durante toda a execução do programa e não pode ser mudada
            // y = 2;    // isso geraria um erro nos informando que constantes são imutáveis

// 6.2 comandos de decisão, quero exemplos. 

    // if, else, switch/case

        // Explicação:
        /*
            if:
                declaração condicional que, se provado verdadeira, executa
                uma série de ações;
            else:
                declaração condicional que, caso condições prévias não forem
                verdadeiras, executa uma série de ações;
            switch/case:
                declarações condicionais que são utilizadas para performar
                diferentes ações baseadas em condições variadas
        */

        // Exemplos:
            if (x == 1) { // se x for igual a 1
                console.log(x) // executamos isso
            } else { // caso não seja
                console.log(y) // executamos isso
            }
            switch (x) { // analisando x
                case 1: // caso for 1
                    console.log(x) // execute estas instruções
                    break;
                case 0: // caso for 2
                    console.log('zero') // execute estas instruções
                    break
                default: // caso não for nenhuma das ocorrências acima
                    console.log(y) // execute isso
                    break;
            }

// 6.3 loops, quero exemplos.

    // while, for, do/while

        // Explicação:
        /*
            while:
                executa um bloco de código enquanto a condição for verdadeira
            for:
                executa um bloco de código um número determinado de vezes
            do/while:
                executa o bloco de código ao menos uma vez, mesmo que a condição
                seja falsa, pois o bloco de código é executado antes da condição
                ser testada
        */

        // Exemplos:
            x = 0;
            while (x<0) {
                console.log(x)
            }
            var numeros = [0,1,2]
            for (let i = 0; i < numeros.length; i++) {
                console.log(numeros[i])
            }
            do {
                console.log(x)
            } while (x < 0);

// 6.4 funções, quero exemplos.
  
    // funções

        // Explicação:
            /*
                funções:
                    bloco de código projetado para performar uma tarefa específica
            */

        // Exemplos:
            function funcaoMultiplica(p1, p2) {
                return p1 * p2;
            }
            console.log(funcaoMultiplica(2, 3))

// 6.5 escopos, quero exemplos.

    // escopos: locais, globais

        // Explicação:
            /*
                escopos:
                    determina a visibilidade e acessibilidade de variáveis
                local:
                    somente acessível dentro do escopo de bloco ou função
                global:
                    acessível em toda parte do código
            */

        // Exemplos:
            // local
                // código aqui não pode usar a variável carro
                function funcaoCarro() {
                    var carro = "Fusca";
                    console.log(carro)
                    // código aqui pode usar a variável carro
                }
                funcaoCarro()
            // global
            var dia = "Segunda"
                // código aqui pode usar a variável dia
                function funcaoDia() {
                    console.log(dia = "Segunda");
                    // código aqui também pode usar a variável carro
                }
                funcaoDia()


// 6.6 inputs e outputs, quero exemplos.

    // inputs, outputs

        // Explicação:
            /*
                inputs:
                    elementos que permitem que o usuário entre e/ou envie
                    informações através da página
                outputs:
                    elementos que permitem que o usuário visualize o retorno
                    da informação em seu navegador sendo exibidos através da página
            */

        // Exemplos:
            // input
                var nome = prompt('Qual é o seu nome?')
            //output
            console.log(nome)
            document.write(nome)


// 6.7 array, quero exemplos.

    // arrays

        // Explicação:
            /*
                arrays:
                    arrays são utilizados para armazenar múltiplos valores
                    em uma única variável
            */

        // Exemplos:
            var carrosNovos = ["Saab", "Volvo", "BMW"];
            console.log(carrosNovos)

// 6.8 objetos, quero exemplos.

    // objetos

        // Explicação:
            /*
                objetos:
                    coleções não ordenadas de dados relacionados, de tipos
                    primitivos ou referenciados, no formato de chave:valor;
                    as chaves podem ser chamadas de propriedades, e podem
                    ser variáveis ou funções.
            */

        // Exemplos:
            pessoa = {nome: 'McGyver', idade: 99};
        console.log(pessoa);


// 6.9 (camelCase, PascalCase, kebab-case, snake_case).

    // tipos de convenção de nomes

        // Explicação:
            /*
                convenção de nome:
                    conjunto de regras que define o tipo e o formato de nomes
                    que identificarão variáveis, tipos, funções, etc, em
                    código-fonte e em documentações;
            */

        // Exemplos:
            console.log('camelCase, PascalCase, kebab-case, snake_case')


// 6.10 Diferença entre caminho absoluto e caminho relativo.

    // caminho absoluto, caminho relativo

        // Explicação:
            /*
                absoluto:
                    caminho integral e total para onde o arquivo e/ou recurso se encontra
                relativo:
                    caminho relativo ao diretório atual
            */

        // Exemplos:
            // absoluto
            '/dir/file.txt'
            // relativo
                '../file.txt'



// 6.11 Diferença entre os operadores &&, ||, == e !=

    // &&, ||, ==, !=

        // Explicação:
            /*
                &&
                    OPERADOR E
                        valida se todas as instruções são verdaeiras
                ||
                    OPERADOR OU
                        valida se ao menos uma das instruções é verdadeira
                ==
                    OPERADOR DE IGUALDADE
                        valida a igualdade da comparação
                !=
                    OPERADOR DE DIFERENÇA
                        valida a diferença da comparação
            */

            if (x == 1 && y == 1) {
                console.log(x, y)
            }
            if (x == 1 || y == 1) {
                console.log(x, y)
            }
            if (x == 1) {
                console.log(x, y)
            }
            if (x != 1) {
                console.log(x, y)
            }

// 6.12 O que é EPER, e para que serve.

    // Entender Planejar Executar Revisar

    /* 
    
    Metodologia de envisionar uma abordagem a uma determinada tarefa
    ou problema e preparar toda a fundação para a resolução das mesmas,
    passo a passo, de modo a ter uma visão clara da resolução do problema
    
    */

// 6.13 Explique o que é Pilha e Fila, quero exemplos.

    /* 
    
    Uma fila (queue) tipicamente estabelece uma política FIFO -- first in,
    first out -- de acesso aos dados. Em outras palavras, a ordem
    estabelecida na lista é a ordem de inserção. No momento de retirar um
    nó da lista, o nó mais antigo (o primeiro que entrou) é o primeiro a ser
    retirado. 
    
    Uma estrutura de pilha (stack), por outro lado, estabelece
    uma política LIFO -- last in, first out. Uma estrutura de pilha
    também oferece basicamente duas operações de manipulação, PUSH,
    para inserção no topo da pilha, e POP, para retirada do topo da pilha.
    
    */

// 6.14 Explique com suas palavras qual a diferença entre html, javascript e css.

    /*
            HTML = linguagem de marcação de hyper-links, é a estrutura da página;
            JS = linguagem de programação interpretada que manipula elementos de HTML e CSS;
            CSS = linguagem de estilização de componentes HTML

    */
