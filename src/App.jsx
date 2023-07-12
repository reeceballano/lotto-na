import Generator from "./components/Generator";
import '../src/css/General.css';
import Logo from '../src/assets/lotto.png';

const App = () => {


    return (
        <div className="app">
            <section className="main-header">
                <div className="container">
                    <div className="nav-container">
                        <a href="#">
                            <div className="logo-container">
                                {/* <img src={Logo} alt="Logo" /> */}
                                <div>
                                    <h3>Lotto<span>Na</span></h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </section>
            
            <section className="generator-section section">
                <div className="container">
                    <Generator />
                </div>

            </section>
        </div>
    )
}

export default App;