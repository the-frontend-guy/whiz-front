import React, { useEffect } from "react"
import "./component.css"
import * as THREE from "three"

const shader = {
  uniforms: {
    color: { value: new THREE.Color(0xffffff) },
  },
  vertexShader: `
  attribute float scale;

			void main() {

				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

				gl_PointSize = scale * ( 300.0 / - mvPosition.z );

				gl_Position = projectionMatrix * mvPosition;

			}`,
  fragmentShader: `
  uniform vec3 color;

			void main() {

				if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;

				gl_FragColor = vec4( color, 1.0 );

      }
      `,
}

const Waves = ({ windowEl }) => {
  const SEPARATION = 100
  const AMOUNTX = 50
  const AMOUNTY = 50

  let camera
  let scene
  let renderer

  var particles,
    count = 0

  var mouseX = 0,
    mouseY = 0

  var windowHalfX = windowEl.width / 2
  var windowHalfY = windowEl.height - 116 / 2

  function init() {
    camera = new THREE.PerspectiveCamera(
      75,
      windowEl.width / (windowEl.height - 116),
      1,
      10000
    )
    camera.position.z = 1000

    scene = new THREE.Scene()


    var numParticles = AMOUNTX * AMOUNTY

    var positions = new Float32Array(numParticles * 3)
    var scales = new Float32Array(numParticles)

    var i = 0,
      j = 0

    for (var ix = 0; ix < AMOUNTX; ix++) {
      for (var iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2 // x
        positions[i + 1] = 0 // y
        positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2 // z

        scales[j] = 1

        i += 3
        j++
      }
    }

    var geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1))

    var material = new THREE.ShaderMaterial({
      uniforms: shader.uniforms,
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
    })


    particles = new THREE.Points(geometry, material)
    scene.add(particles)


    const canvas = document.querySelector("#waveanimation")
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(windowEl.width, windowEl.height - 116)

    document.addEventListener("mousemove", onDocumentMouseMove, false)

    window.addEventListener("resize", onWindowResize)
  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2
    windowHalfY = window.innerHeight / 2

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX
    mouseY = event.clientY - windowHalfY
  }

  

 


  function animate() {
    render()
    requestAnimationFrame(animate)
  }

  function render() {
    camera.position.x += (mouseX - camera.position.x) * 0.05
    camera.position.y += (-mouseY - camera.position.y) * 0.05
    camera.lookAt(scene.position)

    var positions = particles.geometry.attributes.position.array
    var scales = particles.geometry.attributes.scale.array

    var i = 0,
      j = 0

    for (var ix = 0; ix < AMOUNTX; ix++) {
      for (var iy = 0; iy < AMOUNTY; iy++) {
        positions[i + 1] =
          Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50

        scales[j] =
          (Math.sin((ix + count) * 0.3) + 1) * 8 +
          (Math.sin((iy + count) * 0.5) + 1) * 8

        i += 3
        j++
      }
    }

    particles.geometry.attributes.position.needsUpdate = true
    particles.geometry.attributes.scale.needsUpdate = true

    renderer.render(scene, camera)

    count += 0.1
  }

  useEffect(() => {
    init()
    animate()
  }, [])

  return <canvas id="waveanimation"></canvas>
}

export default Waves
