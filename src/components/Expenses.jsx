import React from 'react'
import Expense from './Expense'

function Expenses(props) {

    let totalExpenses = 0

    return (
        <div className='container w-2/5 ml-4 mr-16'>
            <h1 className='text-gray font-bold text-xl mb-4'>Tasks</h1>
            <section>
                {props.list.map(expense => {
                    totalExpenses += expense.amount
                    return <Expense text={expense.text} amount={expense.amount} key={expense.id} />
                })}
            </section>
            <h3 className='font-bold text-gray mt-8'>Total: {totalExpenses}</h3>
        </div>
    )
}

export default Expenses