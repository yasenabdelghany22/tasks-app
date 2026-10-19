import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined'
export default function TaskList() {
    return (
        <li className="flex items-center justify-between gap-4 bg-indigo-task text-white rounded-sm px-5 py-5 min-h-[100px]">
            <div>
                <p className="text-xl font-normal leading-tight">Read a book</p>
                <p className="text-sm font-light mt-1 text-white/90">
                    Finish before the end of the month
                </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
                <button
                    aria-label="Mark as done"
                    className="grid place-items-center w-14 h-14 rounded-full bg-white border-[3px] border-leaf/90 text-leaf focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <DoneOutlinedIcon />
                </button>
                <button
                    aria-label="Edit task"
                    className="grid place-items-center w-14 h-14 rounded-full bg-white border-[3px] border-white/70 ring-1 ring-denim/40 text-denim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <EditOutlinedIcon />
                </button>
                <button
                    aria-label="Delete task"
                    className="grid place-items-center w-14 h-14 rounded-full bg-white border-[3px] border-brick text-brick focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <DeleteOutlinedIcon />
                </button>
            </div>
        </li>
    )
}
