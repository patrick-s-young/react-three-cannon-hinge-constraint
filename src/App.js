// react three
import { Canvas } from "@react-three/fiber";
// physics
import { Physics, Debug } from '@react-three/cannon';
// navigation
import { OrbitControls } from '@react-three/drei';
// ui for useSpring values
import { useControls } from 'leva';
// zustand state management
import { useStore } from './store';
// components
import { Paddle } from './Paddle';
import { Container } from './Container';
import { Ball } from './Ball';
// styles
import "./styles.css";

export default function App() {
  const { cyanSpeed, blueSpeed, redSpeed, greenSpeed, yellowSpeed } = useStore((state) => state);
  const { setSpeed } = useStore((state) => state);
  // leva + zustand controlled inputs 
  const data = useControls({ 
    cyanSpeed: {
      value: 2,
      min: -3,
      max: 3,
      step: .1,
      onChange: (newSpeed) => setSpeed(newSpeed, 'cyanSpeed')
    },
    blueSpeed: {
      value: -1.8,
      min: -3,
      max: 3,
      step: .1,
      onChange: (newSpeed) => setSpeed(newSpeed, 'blueSpeed')
    },
    redSpeed: {
      value: 2.1,
      min: -3,
      max: 3,
      step: .1,
      onChange: (newSpeed) => setSpeed(newSpeed, 'redSpeed')
    },
    greenSpeed: {
      value: 2,
      min: -3,
      max: 3,
      step: .1,
      onChange: (newSpeed) => setSpeed(newSpeed, 'greenSpeed')
    },
    yellowSpeed: {
      value: -2.5,
      min: -3,
      max: 3,
      step: .1,
      onChange: (newSpeed) => setSpeed(newSpeed, 'yellowSpeed')
    }
  });

  return (
    <div className="App">
      <Canvas camera={{ fov: 55, position: [0, 10, 12] }}>
        <color attach="background" args={['black']} />
        <OrbitControls />
        <Physics defaultContactMaterial={{ friction: 0.1, restitution: 0.8 }}>
          <Debug scale={1} color='green'>
            <Ball />
            <Paddle position={[0, 1.1, 0]} speed={cyanSpeed} color='cyan' />
            <Paddle position={[-3, 1.1, -3]} speed={blueSpeed} color='blue' />
            <Paddle position={[3, 1.1, -3]} speed={redSpeed} color='red' />
            <Paddle position={[3, 1.1, 3]} speed={greenSpeed} color='green' />
            <Paddle position={[-3, 1.1, 3]} speed={yellowSpeed} color='yellow' />
            <Container />
          </Debug> 
        </Physics>
        <hemisphereLight args={[0x606060, 0x404040]} />
        <directionalLight position={[1, 1, 1]}/>
      </Canvas>
    </div>
  );
}