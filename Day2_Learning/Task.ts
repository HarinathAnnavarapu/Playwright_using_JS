
//list of valid account numbers
/**
 *  //incremeneting each account number by 1 whenever new account gets created
 */
/**
 * Add data type for the arrays we have added to hold the list of account
 * 
 * */
const listOfSavingAccountNumbers: string[] = ["1000", "10001", "1002"]

const listOfCheckingAccountNumbers: string[] = ["1000", "10001", "1002"]

enum AccountType {

    savings = "savings",
    checking = "checking"

}
/** TO DO Task for typescript
 * Add correct data type for userName parameter
 * Add custom data type to hold typeOfAccount , either it can be checking or saving
 * opening balance is default parameter whose value should be 5000
 */

function openNewAccount(userName: string | null, typeOfAccount: AccountType, openingBalance: number = 5000) {
    /**
     * Here use the generateNewAccountNumber() to get the new account number
     * Add that new account number in the array
     * just print console message that new account added for username with this balance
     */
    let acctNumber = generateNewAccountNumber(typeOfAccount)
    if (typeOfAccount == "checking")
        listOfCheckingAccountNumbers.push(acctNumber)
    else if (typeOfAccount == "savings")
        listOfSavingAccountNumbers.push(acctNumber)

    console.log(`New account ${acctNumber} created for ${userName} user successfully with opening balance: ${openingBalance} `)

}

//openNewAccount("Harinath", "checking")

/** TO DO Task for typescript:
 * Add correct data type for account number parameter for function
 * Use the custom data type to restrict type of account to saving or checking
 * Add return type for this function 
 * Note: we have not covered function return type in typescript but just search on 
 * internet and try to solve it
 * 
 * This function will do this:
 * - based on type of account selected (checking or saving)
 * - we will check if the given accountNumber exists in the array or not
 * - if not we will return false otherwise true
 * - 
 */
function isValidAccount(accountNumber: string, typeOfAccount: AccountType) {
    /**
     * Note: to check if the given value is present in array you can use .includes()
     * e.g
     * const isAccountNumberPresent = listOfSavingAccountNumbers.includes(accountNumber)
     */
    let isAccountNumberPresent: boolean = false
    if (typeOfAccount.toLowerCase() == "checking") {
        isAccountNumberPresent = listOfCheckingAccountNumbers.includes(accountNumber)

    } else if (typeOfAccount.toLowerCase() == "savings") {
        isAccountNumberPresent = listOfSavingAccountNumbers.includes(accountNumber)
    }
    return isAccountNumberPresent
}

/** TODO:
 *  This function will get the last account number present in the array 
 *  Then will increment the account number by 1 
 *  return the new account number back
 *  Note: we have not covered function return type in typescript but just search on 
 *  internet and try to solve it
*/
function generateNewAccountNumber(typeOfAccount: AccountType) {
    let entered_account_number: string | undefined | number = ''
    if (typeOfAccount == "checking") {
        //console.log(listOfCheckingAccountNumbers.length)
        console.log(parseInt(listOfCheckingAccountNumbers[listOfCheckingAccountNumbers.length - 1]))
        entered_account_number = parseInt(listOfCheckingAccountNumbers[listOfCheckingAccountNumbers.length - 1]) + 1
    }
    else if (typeOfAccount == "savings")
        entered_account_number = parseInt(listOfSavingAccountNumbers[listOfSavingAccountNumbers.length - 1]) + 1
    return entered_account_number.toString()
}


//Script

/**
 * 1. ask user his name
 * 2. ask user his account number
 * 3. ask user his type of account
 * 4. now check if for the type of account selected, the given account number exist or not
 *  4.a If account number does not exist then ask him
 *   4.a.1 if he want to open a new account
 *   4.a.2 ask him the type of account he want to open
 *   4.a.3  then add a new account for him and update the array with the new acccount
 * 
 *  4.b If account number is valid, just print the message "You can proceed further"
 * 
 */
let uName = window.prompt("Enter user name :")
let accNumber: string | null
accNumber = window.prompt("Enter the account number:")
let userInput: string | null = window.prompt("Enter the account type:")
let accType: AccountType | null = null;


if (userInput !== null) {
    if (userInput === AccountType.savings || userInput === AccountType.checking) {
        accType = userInput as AccountType;
    } else {
        console.error("Invalid account type.");
    }
} else {
    console.error("User canceled the input.");
}
if (accType != null) {
    if (isValidAccount(accNumber!, accType)) {
        console.log('You can proceed further')
    } else {
        const toOpenNewAccount = (window.prompt('Whether willing to open new account'))
        if (toOpenNewAccount) {
            //let account_type: 'checking' | 'savings' = window.prompt('Enter the type of account')
            openNewAccount(uName, accType)
        }
    }
}




