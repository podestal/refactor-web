import { useMutation, type UseMutationResult, useQueryClient } from "@tanstack/react-query"
import getProjectService, { type Project } from "../../services/api/projectService"

export interface CreateProjectData {
    project: FormData
}

const useCreateProject = (): UseMutationResult<Project, Error, CreateProjectData> => {
    const queryClient = useQueryClient()
    const projectService = getProjectService({})

    return useMutation({
        mutationFn: (data: CreateProjectData) => projectService.post(data.project),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
        },
        onError: (error) => {
            console.error('Error creating project:', error)
        },
    })
}

export default useCreateProject