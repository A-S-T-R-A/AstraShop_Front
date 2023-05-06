import { memo, Suspense, useCallback, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AppRoutesProps, routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRouter = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [pathname])

    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback="">
                <div className="page-wrapper">
                    <div className="page-container">{route.element}</div>
                </div>
            </Suspense>
        )
        return <Route key={route.path} path={route.path} element={element} />
    }, [])

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
