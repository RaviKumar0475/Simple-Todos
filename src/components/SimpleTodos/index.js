import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class simpleTodos extends Component {
  state = {todoList: initialTodosList}

  deleteTodoItem = id => {
    const {todoList} = this.state
    const filterList = todoList.filter(each => each.id !== id)
    this.setState({
      todoList: filterList,
    })
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="container">
        <div className="todo-container">
          <h1>Simple Todos</h1>
          <ul>
            {todoList.map(each => (
              <TodoItem
                deleteTodoItem={this.deleteTodoItem}
                key={each.id}
                details={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default simpleTodos
