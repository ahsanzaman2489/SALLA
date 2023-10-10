import './App.css';
import { CartComponent , defineCustomElements , applyPolyfills } from 'react-library';

applyPolyfills().then(() => {
    defineCustomElements();
});

function App() {
    return (
        <div className="App">
            <CartComponent first="Ahsan" last="Zaman" submitCallback={()=>console.log('from app')}/>
        </div>
    );
}


export default App;