import '../css/SidebarWidget.css';

const SidebarWidget = () => {
    return (
        <div className="sidebar-widget">
            <h2>History</h2>

            <ul className='history-list'>
                <li>12-34-2-4-15-33 <small>Jul 17 2023</small></li>
                <li>12-34-2-4-15-36 <small>Jul 16 2023</small></li>
                <li>12-34-2-4-15-31 <small>Jul 15 2023</small></li>
                <li>12-34-2-4-15-34 <small>Jul 13 2023</small></li>
                <li>12-34-2-4-15-38 <small>Jul 11 2023</small></li>
            </ul>
        </div>
    )
}

export default SidebarWidget;