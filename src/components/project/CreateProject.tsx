import Dropzone from "./form/Dropzone"
import useCreateProject from "../../hooks/project/useCreateProject";


const CreateProject = () => {

    const createProject = useCreateProject()

    // const [file, setFile] = useState<File | null>(null);

  return (
    <Dropzone 
        // setFile={setFile}
        // file={file}
        createProject={createProject}
    />
  )
}

export default CreateProject