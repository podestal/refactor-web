import useGetProjects from "../../hooks/project/useGetProjects"
import ProjectCard from "./ProjectCard"

const ProjectList = () => {

    const { data: projects, isLoading, isError, error, isSuccess } = useGetProjects()

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }
    if (isSuccess) 

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
        {projects?.map((project) => (
            <ProjectCard 
                key={project.id}
                project={project}
            />
        ))}
    </div>
  )
}

export default ProjectList