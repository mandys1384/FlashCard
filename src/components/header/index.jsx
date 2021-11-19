import React from 'react';
import { Outlet, Link } from "react-router-dom";

import "./index.css";

export default function Header() {
    return(
        <div className="header-container">
            <div className="header-content">
                <Link to="/" className="link">            
                    <a>Home</a>
                </Link>

                <Link to="/courses" className="link">
                    <a>Courses</a>
                </Link>

                <Link to="/cadastro/novo" className="link">
                    <a>Cadastrar curso</a>
                </Link>
            </div>
        </div>
    )
}
