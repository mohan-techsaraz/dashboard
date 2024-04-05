import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Main from '../Components/Main'
import ClientListing from '../Components/ClientListing'
import Credentials from '../Components/Credentials'
import WebsiteDetails from '../Components/WebsiteDetails'
import AddNewClient from '../Components/AddNewClient'
import AddNewCredentials from '../Components/AddNewCredentials'
import AddNewWebsite from '../Components/AddNewWebsite'

export const allRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Main/>
            },
            {
                path: "/client-listing",
                element: <ClientListing/>
            },
            {
                path: "/credentials",
                element: <Credentials/>

            },
            {
                path: "/website-details",
                element: <WebsiteDetails/>
            },
            {
                path: "/addnew-client",
                element: <AddNewClient/>

            },
            {
                path: "/add-new-credentials",
                element: <AddNewCredentials/>
            },
            {
                path: "/addnew-website",
                element: <AddNewWebsite/>
            }
        ]
    },
   
])
