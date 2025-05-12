import useGetProjects from "../../hooks/project/useGetProjects"

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
    <div>
        {projects?.map((project) => (
            <div key={project.id}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p>Created at: {new Date(project.created_at).toLocaleDateString()}</p>
            </div>
        ))}
    </div>
  )
}

export default ProjectList