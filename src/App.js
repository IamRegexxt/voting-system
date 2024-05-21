/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import {createBrowserRouter, Link, NavLink, Route, Routes, useNavigate} from "react-router-dom";
import Position from "./components/pages/Position";

import Dashboard from "./components/pages/dashboard";

import Login from "./components/pages/Login";

import Routing from "./Router";
import Candidates from "./components/pages/candidates";



const App = createBrowserRouter([
    {
        path: '/',
        element: <Routing/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>,
                children: [
                    {
                        path: '/dashboard/position',
                        element: <Position/>
                    },
                    {
                        path: '/dashboard/candidates',
                        element: <Candidates/>
                    }
                ]
            }

        ]
    }
])
export default App;*/
