export type Task = {
    id: string
    name: string
    description: string
    isCompleted: boolean
}

export type Filter = '' | 'done' | 'not done'
