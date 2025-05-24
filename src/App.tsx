import './App.css'
import {BrowserRouter} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";

function App() {
    return (
        <BrowserRouter>
            <DefaultLayout></DefaultLayout>
        </BrowserRouter>
    );
}
export default App