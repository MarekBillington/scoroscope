import React from "react";

export default function Sprintfilter ({icon, label, filter }) {

    return (
        <div className="sprintFilter">
            <h3>`&#{icon};`</h3>
            <label>{label}</label>
            <input type={filter} />
        </div>
    )
}
