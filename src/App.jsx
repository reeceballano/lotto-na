import Generator from "./components/Generator";
import '../src/css/General.css';
import Logo from '../src/assets/lotto.png';
import Header from "./components/Header";

const App = () => {


    return (
        <div className="app">
            <Header />
            
            <section className="generator-section section">
                <div className="container">
                    <Generator />
                </div>

            </section>
        </div>
    )
}

export default App;