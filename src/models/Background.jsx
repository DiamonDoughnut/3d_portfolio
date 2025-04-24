import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Background = ({isRotating, ...props}) => {
    const background = useGLTF('/background.glb')
    useGLTF.preload('/background.glb')

  
  return (
    <mesh scale={[100, 100, 100]}>
        <primitive object={background.scene}/>    
    </mesh>
  )
}

export default Background