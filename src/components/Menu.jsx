import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link className="tag1 nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="tag1 nav-link" to="/destino">Destinos</Link>
            </li>
            <li className="nav-item">
            <Link className="tag1 nav-link" to="/promocoes">Promoções</Link>
            </li>
            <li className="nav-item">
            <Link className="tag1 nav-link" to="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </nav> 
    );

}