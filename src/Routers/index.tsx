import { Routes, Route, Navigate } from "react-router-dom";

import DefaultToolkitDownload from "../Container/Default/AppDefaultToolkit";

const pageRouters = {
    paginaInicial: "/pagina-inicial",
    aplicacaoDefaultDoRedux: "/aplicacao-do-redux-padrao"
}


export const AppRouter = () => {
    return (
        <Routes>
            <Route path={pageRouters.aplicacaoDefaultDoRedux} element={<DefaultToolkitDownload />} />
            {/* <Route path="*" element={<Navigate to={pageRouters.paginaInicial} />} /> */}
        </Routes>
    )
}