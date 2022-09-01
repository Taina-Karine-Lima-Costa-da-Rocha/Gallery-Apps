import { Provider } from "react-redux"; 
import createSagaMiddleware from "redux-saga"
import { configureStore } from "@reduxjs/toolkit";

import { Home } from "./Page/Home"

const saga = createSagaMiddleware();
const store = configureStore({
    reducer:{},
    middleware: [saga]
})

export const GalleryCats = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}

//https://www.youtube.com/watch?v=9MMSRn5NoFY =>5:37