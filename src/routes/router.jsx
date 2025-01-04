import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Education from "../pages/Education";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import ScrollToTop from "../component/ScrollToTop";

const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <ScrollToTop></ScrollToTop>
            <Root></Root>
        </>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/education',
                element: <Education></Education>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
        ]
    },
]);

export default router