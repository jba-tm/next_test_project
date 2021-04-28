import styles from './SideNavigation.module.css'

export const SideNavigation=()=>{
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Dummy Heading</p>
            </ul>

            <ul className="list-unstyled CTAs">
            </ul>
        </nav>
    )
}

