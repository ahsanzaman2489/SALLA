import React from "react";
import { CartComponent, ShippingComponent } from "react-library";
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate
} from "react-router-dom";

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
        <div><RouterProvider router={router}/></div>
    );
}


export default App;
