import React, { Component } from 'react';

import {
  Scene, PerspectiveCamera, WebGLRenderer,
  Mesh, MeshPhongMaterial, Color,
  TorusGeometry, DirectionalLight,
} from 'three';

class WaterSpikes extends Component {
  componentDidMount() {
    let scene = new Scene();
    scene.background = new Color('red');
    let camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    let renderer = new WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    {
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);
    }

    this.mount.appendChild(renderer.domElement);

    camera.position.z = 10;

    let ringGeometry = new TorusGeometry(1, 0.4, 5, 10);

    let material1 = new MeshPhongMaterial({ color: 0x00ff00 });
    let material2 = new MeshPhongMaterial({ color: 0x00ffff });
    let material3 = new MeshPhongMaterial({ color: 0xff0000 });

    let ring1 = new Mesh(ringGeometry, material1);
    let ring2 = new Mesh(ringGeometry, material2);
    let ring3 = new Mesh(ringGeometry, material3);

    scene.add(ring1);
    scene.add(ring2);
    scene.add(ring3);
  
    let animate = function () {
      requestAnimationFrame(animate);
      ring1.rotation.x += 0.01;
      ring1.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }

  render() {
    return (
      <React.Fragment>
        <div id="waterSpikes"
          ref={ref => (this.mount = ref)} />
      </React.Fragment >
    );
  }
}

export default WaterSpikes;