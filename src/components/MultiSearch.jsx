import React from "react"
import { useState } from "react"

function MultiSearch({ data }) {
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);

    function handleAdd(item) {
        if (!selected.includes(item)) {
            if (selected.length >= 3) {
                alert("You reached the limit");
            } else setSelected([...selected, item]);
        } else alert("Item already chosen");
        setOpen(false);
    }

    function handleRemAll(e) {
        e.stopPropagation();
        setSelected([]);
    }

    function handleRemove(e, item) {
        e.stopPropagation();
        const temp = selected.filter((t) => t != item)
        setSelected(temp);
    }

    return (
        <div className="search">
            <div className="search_input" onClick={() => setOpen(!open)}>
                {selected.map((item, Index) => (
                    <div onClick={(e) => handleRemove(e, item)} className="item" key={Index}>{item} &#120; </div>
                ))}
                <p className={`${selected.length > 0 ? 'removeAll_show' : ''} removeAll`} onClick={(e) => handleRemAll(e)}>&#120;</p>
            </div>
            <div onMouseLeave={() => setOpen(false)} className={`search_select ${open ? 'search_select_open' : ''}`}>
                {data.map((item, Index) => (
                    <p key={Index} className="item" onClick={() => handleAdd(item)}>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )

}

export default MultiSearch;