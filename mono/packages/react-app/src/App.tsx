import './App.css';
import {CartComponent, ShippingComponent, SubmitComponent, defineCustomElements, applyPolyfills} from 'react-library';
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate
} from "react-router-dom";

applyPolyfills().then(() => {
    defineCustomElements();
});


const CartPage = () => {
    const navigation = useNavigate();
    return <CartComponent submitCallback={() => navigation('/shipping')}/>;
}
const ShippingPage = () => {
    const navigation = useNavigate();
    return <ShippingComponent submitCallback={() => navigation('/submit')} backCallback={() => navigation('/')}/>;
}

const SubmitPage = () => {
    const navigation = useNavigate();
    return <SubmitComponent returnToStoreHandler={() => navigation('/')}/>;
}

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <CartPage/>,
        }, {
            path: "/shipping",
            element: <ShippingPage/>,
        },

        {
            path: "/submit",
            element: <SubmitPage/>,
        },
    ]);

    return (
        <div className='layout'><RouterProvider router={router}/></div>
    );
}


export default App;
