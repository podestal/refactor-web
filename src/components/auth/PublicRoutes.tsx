import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const PublicRoutes = () => {

    useEffect(() => {
        document.querySelector('html')?.classList.add('dark')
    }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-slate-50 mx-auto relative">
        <Outlet />
    </div>
  )
}

export default PublicRoutes