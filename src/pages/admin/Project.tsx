

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import addProject from '@/lib/actions/projects'
import { Plus } from 'lucide-react'




const AddProjectForm = () => {

    const handleSubmit=async()=>{
        await addProject({title:""})
    }
   
  return (
   <Dialog>
    <DialogTrigger>
        <div>
            <Plus/>
        </div>
    </DialogTrigger>
    <DialogContent>
        <DialogTitle>Add New Project</DialogTitle>
        <DialogDescription>Add your project here and users can have a look at it.</DialogDescription>
        <form action={handleSubmit}>

        </form>
    </DialogContent>
   </Dialog>
  )
}

export default AddProjectForm




