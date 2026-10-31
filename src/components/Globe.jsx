import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Globe({ className = "w-full h-full" }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    let animationFrameId
    const width = container.clientWidth || 800
    const height = container.clientHeight || 800

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 240

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Master Globe Group
    const globeGroup = new THREE.Group()
    scene.add(globeGroup)

    const RADIUS = 85

    // 1. Core Sphere (Dark Blue-Black translucent)
    const coreGeo = new THREE.SphereGeometry(RADIUS - 0.5, 48, 48)
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x030712, // deep blue-black
      transparent: true,
      opacity: 0.85,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    globeGroup.add(coreMesh)

    // 2. Latitude and Longitude Wireframe Rings
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x1e293b,
      transparent: true,
      opacity: 0.35,
    })
    for (let lat = -60; lat <= 60; lat += 30) {
      const phi = (90 - lat) * (Math.PI / 180)
      const r = RADIUS * Math.sin(phi)
      const y = RADIUS * Math.cos(phi)
      const ringGeo = new THREE.BufferGeometry()
      const pts = []
      for (let theta = 0; theta <= Math.PI * 2; theta += Math.PI / 32) {
        pts.push(new THREE.Vector3(r * Math.cos(theta), y, r * Math.sin(theta)))
      }
      ringGeo.setFromPoints(pts)
      globeGroup.add(new THREE.Line(ringGeo, wireMat))
    }

    // 3. Dot Matrix / Surface Point Cloud
    const dotsCount = 1800
    const positions = new Float32Array(dotsCount * 3)
    const colors = new Float32Array(dotsCount * 3)
    const limeColor = new THREE.Color(0xccff00)
    const cyanColor = new THREE.Color(0x06b6d4)
    const dimColor = new THREE.Color(0x334155)

    for (let i = 0; i < dotsCount; i++) {
      // Golden spiral distribution on sphere surface
      const y = 1 - (i / (dotsCount - 1)) * 2
      const radiusAtY = Math.sqrt(1 - y * y)
      const phi = i * 2.39996323 // golden angle

      const x = Math.cos(phi) * radiusAtY
      const z = Math.sin(phi) * radiusAtY

      positions[i * 3] = x * RADIUS
      positions[i * 3 + 1] = y * RADIUS
      positions[i * 3 + 2] = z * RADIUS

      // Clustered bright highlights (network nodes)
      const isHub = Math.random() < 0.12
      const c = isHub ? (Math.random() < 0.6 ? limeColor : cyanColor) : dimColor
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    const dotGeo = new THREE.BufferGeometry()
    dotGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    dotGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const dotMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    })
    const pointsMesh = new THREE.Points(dotGeo, dotMat)
    globeGroup.add(pointsMesh)

    // 4. Global Network Curved Connection Arcs
    const hubCoords = [
      { lat: 13.0827, lon: 80.2707 },  // Chennai (Home)
      { lat: 37.7749, lon: -122.4194 }, // SF / Silicon Valley
      { lat: 51.5074, lon: -0.1278 },   // London
      { lat: 35.6762, lon: 139.6503 },  // Tokyo
      { lat: 1.3521, lon: 103.8198 },   // Singapore
      { lat: 47.3769, lon: 8.5417 },    // Zurich
      { lat: 25.2048, lon: 55.2708 },   // Dubai
    ]

    const latLonToVector3 = (lat, lon, r) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lon + 180) * (Math.PI / 180)
      return new THREE.Vector3(
        -(r * Math.sin(phi) * Math.cos(theta)),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      )
    }

    const arcGroup = new THREE.Group()
    globeGroup.add(arcGroup)

    // Connect Chennai to global tech hubs
    const chennaiPos = latLonToVector3(hubCoords[0].lat, hubCoords[0].lon, RADIUS)

    for (let i = 1; i < hubCoords.length; i++) {
      const targetPos = latLonToVector3(hubCoords[i].lat, hubCoords[i].lon, RADIUS)

      // Calculate elevated 3D midpoint for the parabolic arc
      const mid = new THREE.Vector3().addVectors(chennaiPos, targetPos).multiplyScalar(0.5)
      const distance = chennaiPos.distanceTo(targetPos)
      mid.normalize().multiplyScalar(RADIUS + distance * 0.35)

      const curve = new THREE.QuadraticBezierCurve3(chennaiPos, mid, targetPos)
      const curvePts = curve.getPoints(40)
      const arcGeo = new THREE.BufferGeometry().setFromPoints(curvePts)

      const arcMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0xccff00 : 0x10b981,
        transparent: true,
        opacity: 0.6,
        linewidth: 1.5,
      })

      const arcLine = new THREE.Line(arcGeo, arcMat)
      arcGroup.add(arcLine)

      // Destination Beacon Point
      const beaconGeo = new THREE.SphereGeometry(1.4, 8, 8)
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0xccff00 })
      const beacon = new THREE.Mesh(beaconGeo, beaconMat)
      beacon.position.copy(targetPos)
      globeGroup.add(beacon)
    }

    // Chennai Origin Pulsing Beacon
    const chennaiBeaconGeo = new THREE.SphereGeometry(2.4, 12, 12)
    const chennaiBeaconMat = new THREE.MeshBasicMaterial({ color: 0xccff00 })
    const chennaiBeacon = new THREE.Mesh(chennaiBeaconGeo, chennaiBeaconMat)
    chennaiBeacon.position.copy(chennaiPos)
    globeGroup.add(chennaiBeacon)

    // 5. Outer Atmospheric Halo Glow
    const haloGeo = new THREE.SphereGeometry(RADIUS * 1.15, 32, 32)
    const haloMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(0.8, 1.0, 0.0, 1.0) * intensity * 0.45;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    })
    const haloMesh = new THREE.Mesh(haloGeo, haloMat)
    globeGroup.add(haloMesh)

    // Interactive mouse parallax & rotation control
    let mouseX = 0
    let mouseY = 0
    let targetRotationX = 0.2
    let targetRotationY = 0

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1
      targetRotationY = mouseX * 0.4
      targetRotationX = mouseY * 0.3 + 0.2
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    // Resize handler
    const onResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // Animation Loop
    let time = 0
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      time += 0.01

      // Slow continuous rotation around Y axis
      globeGroup.rotation.y += 0.003

      // Smooth inertia towards mouse offset
      globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.05

      // Pulse Chennai beacon
      const pulseScale = 1 + Math.sin(time * 3) * 0.25
      chennaiBeacon.scale.set(pulseScale, pulseScale, pulseScale)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animationFrameId)
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      scene.clear()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className={`relative pointer-events-none select-none ${className}`}
      style={{
        filter: 'blur(0.5px)',
      }}
    />
  )
}

