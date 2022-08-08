import { Outlet } from 'react-router-dom'
import './index.scss'
function ContentLayout() {
  return (
    <div className="content-layout">
      <Outlet />
    </div>
  )
}

export default ContentLayout
