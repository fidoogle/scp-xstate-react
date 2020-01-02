import React from "react";

function View({list}) {
    return (
        <ul>
            {list && list.map(row => (
                <li key={row.month} style={{ background: "orange" }}>
                    {row.month}: {row.volume}
                </li>
            ))}
        </ul>
    );
}

export default View;