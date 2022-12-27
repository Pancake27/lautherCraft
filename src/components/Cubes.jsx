import { useStore } from '../hooks/useStore.jsx';
import Cube from './Cube.jsx';
import React from 'react';

const Cubes = () => {
    const [cubes] = useStore(state => [state.cubes])

    return cubes.map(({ id, pos, texture }) => {
        return (
            <Cube
                key={id}
                id={id}
                position={pos}
                texture={texture}
            />
        )
    })
}

export default Cubes;
