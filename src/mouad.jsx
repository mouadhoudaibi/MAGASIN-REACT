import React , { useState } from "react";

function MyFunctionComponent() {
    const [Nom, setNom] = useState("");

    return (
        <div>
            <input type="text" value={Nom} onChange={e=>setNom(e.target.value)} />
            <p>Vous avez saisi : {Nom}</p>
        </div>
    )
}

export default MyFunctionComponent;