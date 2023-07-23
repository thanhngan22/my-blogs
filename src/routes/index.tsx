import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout";
import Main from "../layout/Main";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Main />,
                },
                {
                    path: "/:topicID",
                    element: <Main />,
                },
                {
                    path: "/:topicID/:postID",
                    element: <Main />,
                }
            ]
        }
    ]

);

export default router;