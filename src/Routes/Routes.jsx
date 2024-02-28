import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Components/pages/Home";
import Categories from "../Components/pages/Categories";
import WebsiteBuilders from "../Components/pages/WebsiteBuilders";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/categories',
                element:<Categories></Categories>
            },
            {
                path:'/websiteBuilders',
                element:<WebsiteBuilders></WebsiteBuilders>
            },
            {
                path:'/todaysDeals',
                element:<WebsiteBuilders></WebsiteBuilders>
            },
        ]
    }
]);
export default router;