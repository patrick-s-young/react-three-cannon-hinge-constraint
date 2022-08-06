# Hinge Constraint With Cannon Hooks  

In this [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber) example, I leveraged [use-cannons](https://github.com/pmndrs/use-cannon)'s useHingeConstraint to create a collections of 'paddles' that can be set to
rotate clockwise/counterclockwise at varying speeds. 

With the hooks version of useHingeContraint, a ref is returned for accessing the api:

```
const [, , hingeApi] = useHingeConstraint(doorRef, doorFrameRef, {
 collideConnected: false,
 axisA: [0, 1, 0],
   axisB: [0, 1, 0],
   pivotA: [-1.05, 0, 0],
   pivotB: [0, 0, 0]
 }
);
```

Then wrap the api in a useEffect with the speed state variable as a depency:

```
useEffect(() => {
 hingeApi.setMotorSpeed(speed)
}, [speed]);
```

![use-cannon-hinge-constraint_24fps](https://user-images.githubusercontent.com/42591798/183264955-0e765437-d773-4ae3-ac4d-082d63202f57.gif)

The slider was enabled by [leva](https://github.com/pmndrs/leva), a hook-based GUI library, and [zustand](https://www.npmjs.com/package/zustand), a state management solution. Both are brought to you by [Poimandres](https://pmnd.rs/).

## View In Sandbox


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone https://github.com/patrick-s-young/react-three-cannon-hinge-constraint.git # or clone your own fork
cd use-spring-cannon-hook-example
npm install
npm start
```

## Built With
* [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber) - React renderer for three.js.
* [@react-three/cannon](https://www.npmjs.com/package/@react-three/cannon) - React hooks for cannon-es, a rigid body physics engine.
* [zustand](https://www.npmjs.com/package/zustand) - state-management solution that uses simplified flux principles.
* [leva](https://github.com/pmndrs/leva) - hook-based GUI library.
* [@react-three/drei](https://www.npmjs.com/package/@react-three/drei) - Helper library for @react-three/fiber.

## Author

* **Patrick Young** - [Patrick Young](https://github.com/patrick-s-young)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


