import { motion } from 'framer-motion';
import  { type Project } from '../../services/api/projectService';

interface Props {
    project: Project
};

export default function ProjectCard({project}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, opacity: 0.8 }}
      className="parent rounded-2xl mx-auto w-[80%] cursor-pointer relative translate-0.7"
    >
        <div className='gradient-shadow absolute'></div>
        <div className='content flex flex-col gap-2'>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{project.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
            <div className="w-full mt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <span>Upload: {project.upload_type.toUpperCase()}</span>
                <span>{new Date(project.created_at).toLocaleDateString()}</span>
                <span className={project.analyzed ? 'text-green-500' : 'text-yellow-500'}>
                {project.analyzed ? 'Analyzed' : 'Pending'}
                </span>
            </div>
        </div>
    </motion.div>
  );
}
