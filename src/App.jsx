import Generator from "./components/Generator";
import '../src/css/General.css';
import Logo from '../src/assets/lotto.png';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SidebarWidget from "./components/SidebarWidget";

const App = () => {


    return (
        <div className="app">
            <Header />
            
            <section className="generator-section section">
                <div className="container">
                    <Sidebar>
                        <SidebarWidget />
                    </Sidebar>
                    <Generator />
                </div>

            </section>
        </div>
    )
}

export default App;