// "use client"
// import React,{useState,useRef,Suspense} from 'react'
// import {Canvas,useFrame} from '@react-three/fiber'
// import { Points,PointMaterial,Preload } from '@react-three/drei'
// // @ts-ignore
// import * as random from 'maath/random/dist/maath-random.esm'
// export const StarBackground = (props:any) => {
//     const ref: any=useRef()
// const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
//     useFrame((state,delta)=>{
//         ref.current.rotation.x-=delta/10;
//                 ref.current.rotation.y-=delta/15;

//     })
 

//   return (
//   <group rotation={[0,,Math.PI/4]}>
//     <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial transparent color="$fff" size={0.002} sizeAttenuation={true} depthWrite={false}/>
//     </Points>
//   </group>
//   )
// }
// // const StarsCanvas=()=>{
// // <div className="w-full h-auto fixed inset-0 z-[20]">
// //     <Canvas camera={{position:[0,0,1]}}>
// // <Suspense fallback={null}>
// //     <StarBackground/>
// // </Suspense>
// //     </Canvas>
// // </div>
// // }
// const StarsCanvas = () => {
//   return (
//     <div className="w-full h-auto fixed inset-0 z-[20]">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <StarBackground />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas
// "use client";
// import React, { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// // @ts-ignore
// import * as random from "maath/random/dist/maath-random.esm";

// // export const StarBackground = (props: any) => {
// //   const ref: any = useRef();
// //   const [sphere] = useState(() =>
// //     random.inSphere(new Float32Array(5000), { radius: 1.2 })
// //   );

// //   useFrame((state, delta) => {
// //     ref.current.rotation.x -= delta / 10;
// //     ref.current.rotation.y -= delta / 15;
// //   });

// //   return (
// //     <group rotation={[0, 0, Math.PI / 4]}>
// //       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
// //         <PointMaterial
// //           transparent
// //           color="#fff"
// //           size={0.002}
// //           sizeAttenuation={true}
// //           depthWrite={false}
// //         />
// //       </Points>
// //     </group>
// //   );
// // };
// export const StarBackground = (props: any) => {
//   const ref: any = useRef();
//   const [sphere] = useState(() => {
//     // Generate the sphere points and ensure they're valid
//     const points = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    
//     // Optional: Add validation to ensure no NaN values
//     for (let i = 0; i < points.length; i++) {
//       if (isNaN(points[i])) {
//         points[i] = 0; // Replace NaN with 0 or another default value
//       }
//     }
    
//     return points;
//   });

//   useFrame((state, delta) => {
//     if (ref.current) {
//       ref.current.rotation.x -= delta / 10;
//       ref.current.rotation.y -= delta / 15;
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#fff"
//           size={0.002}
//           sizeAttenuation={true}
//           dethWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };
// const StarsCanvas = () => {
//   return (
//     <div className="w-full h-auto fixed inset-0 z-[20]">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <StarBackground />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;
"use client";
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

export const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;