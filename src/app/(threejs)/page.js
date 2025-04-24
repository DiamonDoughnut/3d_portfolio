"use client"
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Planets from "@/models/Planets";
import Loader from "@/components/Loader";
import Background from "@/models/Background";
import HomeInfo from "@/components/HomeInfo";
import AmbientShip from "@/models/AmbientShip";


export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);


  const adjustPlanetsForScreenSize = () => {
    let screenScale = null;
    let screenPos = [-45, -8.5, -165];
    let rotation = [0.1, -0.5, 0];
    if (window) {

      if (window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9];
      } else {
        screenScale = [1, 1, 1];
      }
      return [screenScale, screenPos, rotation]
    }
  }
  const adjustShipForScreenSize = () => {
    let screenScale, screenPos
    if (window) {

      if (window.innerWidth < 768) {
        screenScale = [0.09, 0.09, 0.09];
        screenPos = [-15, 8, -18]
      } else {
        screenScale = [0.15, 0.15, 0.15];
        screenPos = [-10, 6, -15]
      }
    }
    return [screenScale, screenPos]
  }

  const [planetScale, planetPos, planetRotation] = adjustPlanetsForScreenSize();
  const [shipScale, shipPos] = adjustShipForScreenSize();



  return (
    <section className="w-full h-screen relative overflow-y-hidden">
        <div className="absolute bottom-28 left-0 right-0 z-10 flex items-center justify-center">
          {
            currentStage !== null && <HomeInfo currentStage={currentStage} />
          }
        </div>
      <Canvas
      camera={{ near: 0.1, far: 1000}} 
      className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`} 
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor={"#000000"} groundColor={"#000000"} intensity={1} />
          <AmbientShip position={shipPos} scale={shipScale} isRotating={isRotating} />
          <Background rotation={[0, 0, 0]} isRotating={isRotating} />
          <Planets 
            position={planetPos}
            scale={planetScale}
            rotation={planetRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          {/**
            <Ship position={[-60, 30, -40]} scale={[0.5, 0.5, 0.5]} />
          */}
        </Suspense>
      </Canvas>
      
    </section>
  );
}
