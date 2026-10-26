import type { Task } from '../types'
import { v4 as uuid4 } from 'uuid'

type State = Task[]

export type Action =
    | { type: 'ADD_TASK'; payload: string }
    | {
          type: 'UPDATE_TASK'
          payload: { id: string; name: string; description: string }
      }
    | { type: 'TOGGLE_COMPLETED'; payload: Task }
    | { type: 'DELETE_TASK'; payload: Task }

export default function TodosReducer(prevState: State, action: Action): State {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...prevState,
                {
                    id: uuid4(),
                    name: action.payload,
                    description: '',
                    isCompleted: false,
                },
            ]
        case 'UPDATE_TASK':
            return prevState.map((t: Task) =>
                t.id === action.payload.id
                    ? {
                          ...t,
                          name: action.payload.name,
                          description: action.payload.description,
                      }
                    : t,
            )
        case 'DELETE_TASK':
            return prevState.filter((t: Task) => t.id !== action.payload.id)
        case 'TOGGLE_COMPLETED':
            return prevState.map((t: Task) =>
                t.id === action.payload.id
                    ? {
                          ...t,
                          isCompleted: !t.isCompleted,
                      }
                    : t,
            )
        default:
            return prevState
    }
}
