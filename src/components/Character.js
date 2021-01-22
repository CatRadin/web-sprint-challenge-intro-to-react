// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components';

export default function Character(props) {
    const { character } = props;
    const [showDetails, setShowDetails] = useState(false);

    function onClick() {
        setShowDetails((showDetails) => !showDetails)
    }

    return (

<StyledCharacters>
<div className= 'char-container'>
<h2>{character.name}</h2>
<p>Birth Year: {character.birth_year}</p>
</div>

</StyledCharacters>

    )
}

const StyledCharacters = styled.div`
color: white;
display:flex;
justify-content:center;
align-items: center;

h2 {
    background: black;
    border-radius: 1rem;
    padding: 1rem;
}

p {
    background: darkgrey;
    color: white;
}

`