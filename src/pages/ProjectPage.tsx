import Dropzone from "../components/project/form/Dropzone"
import ProjectList from "../components/project/ProjectList"

const ProjectPage = () => {
  return (
    <div className="w-full min-h-screen max-w-[95%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1380px] mx-auto overflow-hidden pt-10">
        <div className="flex flex-col gap-20">
            <Dropzone 
                onFileDrop={() => {}}
            />
            <ProjectList />
        </div>
    </div>
  )
}

export default ProjectPage