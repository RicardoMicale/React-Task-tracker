import React from 'react'
import Task from './Task'
import list from '../tasks'

function Tasks() {

    return (
        <div className='mx-4 mt-8'>
            <h1 className='text-gray font-bold text-xl mb-4'>Tasks</h1>
            <section>
                {list.map(task => {
                    return <Task text={task.text} done={task.done} key={task.id} />
                })}
            </section>
        </div>
    )
}

export default Tasks