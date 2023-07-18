import '../css/SidebarWidget.css';

const SidebarWidget = ({ title, children }) => {
    return (
        <div className="sidebar-widget">
            <h2>{title}</h2>

            {children}
        </div>
    )
}

export default SidebarWidget;