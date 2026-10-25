import { type Dispatch, type JSX, type SetStateAction } from 'react'
import type { Filter } from '../types'

export default function TasksNav({
    filter,
    setFilter,
}: {
    filter: Filter
    setFilter: Dispatch<SetStateAction<Filter>>
}): JSX.Element {
    return (
        <nav aria-label="Filter tasks" className="mt-8 flex justify-center">
            <div className="inline-flex border border-neutral-200 rounded-sm overflow-hidden">
                <button
                    onClick={() => setFilter('')}
                    aria-current="true"
                    className={`px-5 py-4 text-sm ${filter === '' ? 'font-medium text-crimson bg-blush' : 'font-light text-neutral-500 bg-white border-r border-neutral-200'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson`}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter('done')}
                    className={`px-5 py-4 text-sm ${filter === 'done' ? 'font-medium text-crimson bg-blush' : 'font-light text-neutral-500 bg-white border-r border-neutral-200'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson`}
                >
                    Done
                </button>
                <button
                    onClick={() => setFilter('not done')}
                    className={`px-5 py-4 text-sm ${filter === 'not done' ? 'font-medium text-crimson bg-blush' : 'font-light text-neutral-500 bg-white border-r border-neutral-200'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson`}
                >
                    Not done
                </button>
            </div>
        </nav>
    )
}
