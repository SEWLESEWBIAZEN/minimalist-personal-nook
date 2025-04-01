
import { Project } from "../interfaces";
import  supabase  from '../utils/supabase'


const addProject= async(project:Project)=>{
    const { data, error } = await supabase
      .from('projects')
      .insert([
        {
          title: project.title,
          description: project.description,
          placeholder: project.image,
          githuburl: project.githubUrl,
          liveurl: project.liveUrl,
          featured: project.featured,
          tags: project.tags
        }
      ])
}

export default addProject;
