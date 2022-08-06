// cannon body hook
import { useBox } from '@react-three/cannon';

export const ContainerWall = ({
  size,
  position,
  color,
  name
}) => {
  const [ref] = useBox(() => ({
    args: size,
    position
  }));

  return (
    <mesh ref={ref} name={name}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color} transparent opacity={0.7} />
    </mesh>
  )
}