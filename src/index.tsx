import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { StoreProvider } from "app/providers/StoreProvider"
import App from "./app/App"
import "app/styles/index.scss"
import { ErrorBoundary } from "./app/providers/ErrorBoundary"

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root")
)
