import { RigidBody } from "@react-three/rapier"

interface MapProps {
  scale: number;
  position: [number, number, number];
}

export const Map = ({ ...props }: MapProps) => {
  return (
    <>
      <group>
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            rotation-x={-Math.PI / 2}
            position-y={-0.1}
            {...props}
          >
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="#f0f0f0" />
          </mesh >
        </RigidBody>
      </group>
    </>
  )
}