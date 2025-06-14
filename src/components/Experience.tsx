import { ContactShadows, Environment, OrthographicCamera } from "@react-three/drei"
import { Map } from "./Map"
import { Physics } from "@react-three/rapier"
import { CharacterController } from "./CharacterController"
import { useRef } from "react"

export const Experience = () => {
  const shadowCameraRef = useRef(null);

  return (
    <>
      <Environment preset="sunset" />
      <directionalLight
        position={[25, 18, -25]}
        intensity={0.3}
        castShadow
        shadow-camera-near={0}
        shadow-camera-far={80}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-bias={-0.0001}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>

      <ContactShadows blur={2} />

      <Physics debug>
        <Map
          scale={5}
          position={[0, -1, 0]}
        />
        <CharacterController />
      </Physics>

    </>
  )
}