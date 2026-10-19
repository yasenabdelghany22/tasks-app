export default function TasksForm() {
    return (
        <form
            className="mt-10 flex flex-col-reverse sm:flex-row-reverse gap-4 sm:gap-5"
            onSubmit={(e) => e.preventDefault()}
        >
            <button
                type="submit"
                className="sm:w-[34%] h-[78px] rounded-sm bg-crimson text-white text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson"
            >
                Add
            </button>
            <label className="flex-1">
                <span className="sr-only">Task title</span>
                <input
                    type="text"
                    placeholder="Task title"
                    className="w-full h-[78px] rounded-sm border border-neutral-200 px-5 text-base font-light placeholder:text-neutral-400 focus:outline focus:outline-2 focus:outline-crimson"
                />
            </label>
        </form>
    )
}
