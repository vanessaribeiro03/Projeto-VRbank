import readlinesync = require("readline-sync");
import { CheckingAccount } from "./src/model/CheckingAccount";
import { SavingsAccount } from "./src/model/SavingsAccount";
import { AccountController } from "./src/controller/AccountController";

export function main() {
  let option,
    accountNumber,
    bankBranchNumber,
    type,
    balance,
    limit,
    anniversary,
    destinationAccountNumber,
    value: number;
  let holder: string;
  const typeAccounts = ["Account Checking", "Account Saving"];

  const account = new AccountController();

  //Novas Instâncias da Classe ContaCorrente (Objetos)

  account.register(
    new CheckingAccount(
      account.gerateNumber(),
      1234,
      1,
      "Amanda Magro",
      1000000.0,
      100000.0
    )
  );

  account.register(
    new CheckingAccount(
      account.gerateNumber(),
      4578,
      1,
      "João da Silva",
      1000.0,
      100.0
    )
  );

  // Novas Instâncias da Classe ContaPoupança (Objetos)

  account.register(
    new SavingsAccount(
      account.gerateNumber(),
      5789,
      2,
      "Geana Almeida",
      10000,
      10
    )
  );

  account.register(
    new SavingsAccount(account.gerateNumber(), 5698, 2, "Jean Lima", 15000, 15)
  );

  while (true) {
    console.log("\n-------------------------------------------");
    console.log("                VR BANK                    ");
    console.log("-------------------------------------------");
    console.log("                                           ");
    console.log("      1 - Criar Conta                      ");
    console.log("      2 - Listar todas as Contas           ");
    console.log("      3 - Buscar Conta por Numero          ");
    console.log("      4 - Atualizar Dados da Conta         ");
    console.log("      5 - Apagar Conta                     ");
    console.log("      6 - Sacar                            ");
    console.log("      7 - Depositar                        ");
    console.log("      8 - Transferir valores entre Contas  ");
    console.log("      9 - Sair                             ");
    console.log("-------------------------------------------");
    console.log("\nEntre com a opção desejada: ");

    option = readlinesync.questionInt();

    if (option === 9) {
      console.log("See you next time!");
      process.exit(0);
    }

    switch (option) {
      case 1:
        console.log("Enter the bank branch number: ");
        bankBranchNumber = readlinesync.questionInt("");

        console.log("Enter the account holder's name: ");
        holder = readlinesync.question("");

        console.log("Choose the account type: ");
        type = readlinesync.keyInSelect(typeAccounts, "", { cancel: false }) + 1;

        console.log("Enter the account balance: ");
        balance = readlinesync.questionFloat("");

        switch (type) {
          case 1:
            console.log("Enter the account limit: ");
            limit = readlinesync.questionFloat("");
            account.register(
              new CheckingAccount(
                account.gerateNumber(),
                bankBranchNumber,
                type,
                holder,
                balance,
                limit
              )
            );
            break;

          case 2:
            console.log("Enter the savings account anniversary day:");
            anniversary = readlinesync.questionInt();
            account.register(
              new SavingsAccount(
                account.gerateNumber(),
                bankBranchNumber,
                type,
                holder,
                balance,
                anniversary
              )
            );
            break;
        }
        break;

      case 2:
        console.log("\n\nList all accounts:\n\n");
        account.getAll();
        break;

      case 3:
        console.log("\n\nFind account by number:\n\n");

        console.log("Enter the account number: ");
        accountNumber = readlinesync.questionInt("");

        account.getByNumber(accountNumber);
        break;

      case 4:
        console.log("\n\nUpdate account details.\n\n");

        console.log("Enter the account number: ");
        accountNumber = readlinesync.questionInt("");

        let account1 = account.findAccount(accountNumber);

        if (account1 !== null) {

          console.log("Enter the bank branch number: ");
          bankBranchNumber = readlinesync.questionInt("");

          console.log("Enter the account holder's name: ");
          holder = readlinesync.question("");

          console.log("Enter the account balance: ");
          balance = readlinesync.questionFloat("");

          type = account1.type;

          switch (type) {
            case 1:
              console.log("Enter the account limit: ");
              limit = readlinesync.questionFloat("");
              account.update(
                new CheckingAccount(
                  accountNumber,
                  bankBranchNumber,
                  type,
                  holder,
                  balance,
                  limit
                )
              );
              break;

            case 2:
              console.log("Enter the savings account anniversary day:");
              anniversary = readlinesync.questionInt();
              account.update(
                new SavingsAccount(
                 accountNumber,
                  bankBranchNumber,
                  type,
                  holder,
                  balance,
                  anniversary
                )
              );
              break;
          }
        } else {
          console.log("Account not found.");
        }

        break;

      case 5:
        console.log("\n\nDelete an account\n\n");

        console.log("Enter the account number: ");
        accountNumber = readlinesync.questionInt("");

        account.delete(accountNumber);
        break;

      case 6:
        console.log("\n\nWithdrawal.\n\n");

        console.log("Enter the account number: ");
        accountNumber = readlinesync.questionInt("");

        console.log('Enter the withdrawal amount:');
        value = readlinesync.questionFloat('')

        account.withdraw(accountNumber, value);
        break;

      case 7:
        console.log("\n\nDeposit.\n\n");

        console.log("Enter the account number: ");
        accountNumber = readlinesync.questionInt("");

        console.log('Enter the deposit amount: : ');
        value = readlinesync.questionFloat('')

        account.deposit(accountNumber, value);
        break;

      case 8:
        console.log("\n\nTransfer Between Accounts.\n\n");

        console.log("Enter the origin account number: ");
        accountNumber = readlinesync.questionInt("");

        console.log("Enter the destination account number: ");
        destinationAccountNumber = readlinesync.questionInt("");

        console.log('Enter the transfer amount: ');
        value = readlinesync.questionFloat('')

        account.transfer(accountNumber, destinationAccountNumber,value);
        break;

      default:
        console.log('Invalid option. Please choose an option between 1 and 9.');
    }
  }
}

main();
