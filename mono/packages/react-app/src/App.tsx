import './App.css';
import {CartComponent, ShippingComponent, defineCustomElements, applyPolyfills} from 'react-library';
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate, redirect, useNavigation
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
    return <ShippingComponent submitCallback={() => console.log('submitted')} backCallback={() => navigation('/')}/>;
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
    ]);

    return (
        <RouterProvider router={router}/>
    );
}


export default App;