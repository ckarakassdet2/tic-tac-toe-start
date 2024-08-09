import { useState } from "react";

export default function PlayerInfo({ initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName); 
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbol, playerName); 
        }  
    }

    //let btnCaption = 'Edit'; 

    function handleChangeName(event) {
        console.log("event: " + event); 
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChangeName} />;
        //btnCaption = 'Save'; 

    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player" >
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}