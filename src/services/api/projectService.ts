import APIClient from "./apiClient"

export interface Project {
    id: number
    name: string
    description: string
    upload_type: string
    uploaded_file: File | null
    repo_url: string | null
    created_at: string
    analyzed: boolean
}   

export type CreateUpdateProject = Omit<Project, 'id' | 'created_at' | 'analyzed'>;

interface Props {
    projectId?: number
}

const getProjectService = ({ projectId }: Props) => {
    console.log('projectId', projectId);
    
    let url = '/projects/'
    if (projectId) {
        url = `${url}/${projectId}/`
    }   
    return new APIClient<Project, FormData>(url)
}

export default getProjectService