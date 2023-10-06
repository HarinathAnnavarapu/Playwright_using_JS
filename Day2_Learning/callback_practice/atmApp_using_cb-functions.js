const account_number = 7030
const expected_atm_pin = 1863
let available_amount = 25000
let user_name, entered_account_number, display_transactions_history

const number_of_transactions_to_do = 3

const last_withdrawal_history = []



let validate_authentication_process_transaction = () => {
    if (window.prompt(`Enter your ATM Pin`) == expected_atm_pin) {
        console.log(`${user_name} is authenticated successfully`)

        for (let i = 0; i < number_of_transactions_to_do; i++) {
            let entered_amount = window.prompt(`Enter withdrawal amount for transaction ${i + 1}`)
            if (entered_amount > 0 && entered_amount < available_amount) {
                console.log(`Entered amount ${entered_amount} is withdrawn successfully`)
                available_amount = available_amount - entered_amount
                console.log(`Balance amount in the ${account_number} is ` + available_amount)
                last_withdrawal_history.push(entered_amount)

            } else {
                console.log('Insufficient amount in the account')
            }

        }
        return console.log('Transaction completed...')

    }
    else {
        console.log('Invalid pin entered')
    }

}


function fetchUserDetails(cb) {

    user_name = window.prompt(`Enter your name`)
    entered_account_number = window.prompt(`Enter your account number`)
    cb()

}

function validateAccountNumber() {
    if (entered_account_number == account_number) {
        console.log(`Welcome ${user_name}`)
        return true
    } else {
        return false
    }
}



function transHistory() {
    display_transactions_history = window.prompt('Display last transactions history : Yes/No')
    if (display_transactions_history.toLowerCase() == 'yes') {
        console.log(last_withdrawal_history.length)
        for (let size = 0; size < last_withdrawal_history.length; size++) {
            if (last_withdrawal_history[size] != null) {
                console.log(`Last Transaction ${size + 1} are ${last_withdrawal_history[size]}`)
            }
        }

    }
}


const flag = fetchUserDetails(validateAccountNumber)
if (flag) {

    validate_authentication_process_transaction()
    transHistory()

}
