import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import type {Task} from "../types";
import {useState} from "react";
import {useTasks} from "../context/TasksProvider.tsx";

export default function EditDialog({open, setOpen, task} : {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    task: Task
}) {
    const [name, setName] = useState(task.name)
    const [description, setDescription] = useState(task.description)
    const { tasks, setTasks } = useTasks()
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="edit-dialog-title"
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle id="edit-dialog-title">Edit task</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Name"
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Description"
                    fullWidth
                    multiline
                    minRows={3}
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => {
                    setTasks(tasks.map((t) => t.id === task.id ? { ...t, name, description } : t))
                    setOpen(false)
                }}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}