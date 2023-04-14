import React, { useRef, useEffect,useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef()
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  useFrame(() => {
    if (hover) {
      group.current.rotation.y += 0.005;
    }
  });
  const { nodes, materials, animations } = useGLTF('/ece.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['idle'].play()
  })
  return (
    <group ref={group} {...props} dispose={null} >
      
      <group name="Scene" onPointerOver={() => {
          setHover(true);
        }}
        onPointerOut={() => {
          setHover(false);
        }}>
        
        <group
          name="ece_basePelvis"
          position={[0, 0.82, -0.11]}
          rotation={[3.14, 0, -Math.PI / 2]}
          scale={0.01}
        />
        <group name="Armature" rotation={[Math.PI, 0, Math.PI]}>
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <skinnedMesh
            name="ecekirpik_sag"
            geometry={nodes.ecekirpik_sag.geometry}
            material={materials['Material #26']}
            skeleton={nodes.ecekirpik_sag.skeleton}
          />
          <skinnedMesh
            name="ecekirpik_sol"
            geometry={nodes.ecekirpik_sol.geometry}
            material={materials['Material #26']}
            skeleton={nodes.ecekirpik_sol.skeleton}
          />
          <skinnedMesh
            name="eceg1_1"
            geometry={nodes.eceg1_1.geometry}
            material={materials['Material #25']}
            skeleton={nodes.eceg1_1.skeleton}
          />
          <skinnedMesh
            name="eceg2_2"
            geometry={nodes.eceg2_2.geometry}
            material={materials['Material #25']}
            skeleton={nodes.eceg2_2.skeleton}
          />
          <skinnedMesh
            name="eceeller"
            geometry={nodes.eceeller.geometry}
            material={materials.kc1_hand}
            skeleton={nodes.eceeller.skeleton}
          />
          <skinnedMesh
            name="ecekiz1_govde"
            geometry={nodes.ecekiz1_govde.geometry}
            material={materials.kc1_thirt_pnt}
            skeleton={nodes.ecekiz1_govde.skeleton}
          />
          <skinnedMesh
            name="ecekafaa_aaa"
            geometry={nodes.ecekafaa_aaa.geometry}
            material={materials.kc1_kafa}
            skeleton={nodes.ecekafaa_aaa.skeleton}
          />
          <skinnedMesh
            name="ecesac_r_d"
            geometry={nodes.ecesac_r_d.geometry}
            material={materials.kc1_sac}
            skeleton={nodes.ecesac_r_d.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ece.glb')
