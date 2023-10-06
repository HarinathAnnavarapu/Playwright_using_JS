const account_number = 7030
const expected_atm_pin = 1863
let available_amount = 25000

let number_of_transactions_to_do = 3

const last_withdrawal_history = []
let display_transactions_history 
let user_name = prompt(`Enter your name`)
let entered_account_number = prompt(`Enter your account number`)

if (entered_account_number == account_number) {

    console.log(`Welcome ${user_name}`)


    if (window.prompt(`Enter your ATM Pin`) == expected_atm_pin) {
        console.log(`${user_name} is authenticated successfully`)
         display_transactions_history = window.prompt('Display last transactions history : Yes/No')
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
    }
    else {
        console.log('Invalid pin entered')

    }
} else {
    console.log(`Entered account number ${entered_account_number} is invalid`)
}



if (display_transactions_history === 'yes') {
    console.log(last_withdrawal_history.length - 1)
    for (let i = 0; i < last_withdrawal_history.length; i++) {
        //console.log(last_withdrawal_history[i])
        if (last_withdrawal_history[i] != null) {
            console.log(`Last Transactions are ${last_withdrawal_history[i]}`)
        }
    }

}