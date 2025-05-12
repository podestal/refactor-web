import { type UseQueryResult, useQuery } from "@tanstack/react-query"
import getProjectService, {type Project} from "../../services/api/projectService"

const useGetProjects = (): UseQueryResult<Project[], Error> => {
    const projectService = getProjectService({  })
    return useQuery({
        queryKey: ['projects'],
        queryFn: () => projectService.get(),
    })
}

export default useGetProjects