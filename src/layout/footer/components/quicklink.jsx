import React from "react";

import { Link } from "react-router-dom";

function QuickLinksMenu(){
    return(
        <>
        <div className="QuickMenu">
            <ul className="QuickList">
                <li className="QuickItem">
                    <Link to="/" className="QuickLink">Home</Link>
                </li>
                <li className="QuickItem">
                    <Link to="/career" className="QuickLink">Careers</Link>
                </li>
                <li className="QuickItem">
                    <Link to="/" className="QuickLink">Newsroom</Link>
                </li>
                <li className="QuickItem">
                    <Link to="/" className="QuickLink">Locations</Link>
                </li>
            </ul>
        </div>
        </>
    )
}