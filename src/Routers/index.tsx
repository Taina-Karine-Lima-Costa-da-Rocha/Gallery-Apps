import { Routes, Route, Navigate } from "react-router-dom";

import  AppDefaultReduxToolkit  from "../Container/indext";

const pageRouters = {
    paginaInicial: "/pagina-inicial",
    aplicacaoDefaultDoRedux: "/aplicacao-do-redux-padrao"
}


export const AppRouter = () => {
    return (
        <Routes>
            <Route path={pageRouters.aplicacaoDefaultDoRedux} 
            element={<AppDefaultReduxToolkit />} 
            />
            {/* <Route path="*" element={<Navigate to={pageRouters.paginaInicial} />} /> */}
        </Routes>
    )
}