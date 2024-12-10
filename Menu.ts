import readlinesync = require("readline-sync");

let opcao: number;

do {
    menu();
    opcao = readlinesync.questionInt();

    if(opcao === 9){
        console.log('Até a próxima!');
        process.exit(0);
    }

    switch (opcao) {
        case 1:
            console.log('Conta Criada.');
            break;

        case 2:
            console.log('Lista de todas as contas:');
            break;

        case 3:
            console.log('Conta por numero buscada.');
            break;

        case 4:
            console.log('Dados da conta atualizado.');
            break;

        case 5:
            console.log('Conta apagada');
            break;

        case 6:
            console.log('Saque efetuado.');
            break;

        case 7:
            console.log('Deposito efetuado.');
            break;

        case 8:
            console.log('Transferência concluida.');
            break;
    
        default:
            console.log("Opção Inválida. Escolha uma opção entre 1 a 9.");
    }
} while (true);


function menu(): void{
    console.log('-------------------------------------------');
    console.log('                VR BANK                    ');
    console.log('-------------------------------------------');
    console.log('                                           ');
    console.log('      1 - Criar Conta                      ');
    console.log('      2 - Listar todas as Contas           ');
    console.log('      3 - Buscar Conta por Numero          ');
    console.log('      4 - Atualizar Dados da Conta         ');
    console.log('      5 - Apagar Conta                     ');
    console.log('      6 - Sacar                            ');
    console.log('      7 - Depositar                        ');
    console.log('      8 - Transferir valores entre Contas  ');
    console.log('      9 - Sair                             ');
    console.log('-------------------------------------------');
    console.log('\nEntre com a opção desejada: ');
    
}



