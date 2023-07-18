import Generator from "./components/Generator";
import '../src/css/General.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SidebarWidget from "./components/SidebarWidget";
import LocalStorageProvider from "./context/LocalStorageProvider";
import LocalStorageItems from "./components/LocalStorageItems";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="app">
            <LocalStorageProvider>
                <Header />
                <section className="generator-section section">
                    <div className="container">
                        <Sidebar>
                            <SidebarWidget title="History">
                                <LocalStorageItems />
                            </SidebarWidget>
                        </Sidebar>
                        <Generator />
                    </div>
                </section>
                <Footer />
            </LocalStorageProvider>
        </div>
    )
}

export default App;