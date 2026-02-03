import React from 'react';
import {RouterProvider} from "react-router";
import {useSelector} from "react-redux";
import {router} from "@/router/router.jsx";
import AuthModal from "@components/AuthModal/AuthModal.jsx";

const App = () => {

    const isLoginOpen = useSelector(state => state.modal.isLoginOpen)

    return (
        <>
            <RouterProvider router={router}/>
            {isLoginOpen && <AuthModal/>}
        </>
    )
};

export default App;