import { Provider } from "react-redux";

import { store } from "./Default/app/store";
import { App } from "./Default/AppDefaultToolkit"

const AppDefaultReduxToolkit = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default AppDefaultReduxToolkit