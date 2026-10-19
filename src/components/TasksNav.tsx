export default function TasksNav() {
    return (
        <nav aria-label="Filter tasks" className="mt-8 flex justify-center">
            <div className="inline-flex border border-neutral-200 rounded-sm overflow-hidden">
                <button className="px-5 py-4 text-sm font-light text-neutral-500 bg-white border-r border-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson">
                    All
                </button>
                <button className="px-5 py-4 text-sm font-light text-neutral-500 bg-white border-r border-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson">
                    Done
                </button>
                <button
                    aria-current="true"
                    className="px-5 py-4 text-sm font-medium text-crimson bg-blush focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson"
                >
                    Not done
                </button>
            </div>
        </nav>
    )
}
