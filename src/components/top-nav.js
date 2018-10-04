import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={e => {e.preventDefault(); props.openInfo();}}>
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#" onClick={e => {e.preventDefault(); props.resetGame();}}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

