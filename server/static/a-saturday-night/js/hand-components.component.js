/**
*
* Hand Controls component
* Auto-detect appropriate controllers
*
* @property {left/right} Hand mapping
*/
AFRAME.registerComponent('hand-components', {
  schema: {default: 'left'},

  update: function () {
    var el = this.el;
    var hand = this.data;
    var controlConfiguration = {
      hand: hand,
      /* this controller config setting tell it whether to use the default model, I think. Commenting out: */
      model: true,
      // orientationOffset: hand === 'left' ? new THREE.Vector3(, 0, 0) : new THREE.Vector3(90, 0, 0)
    };
    el.setAttribute('vive-controls', controlConfiguration);
    el.setAttribute('oculus-touch-controls', controlConfiguration);
    el.setAttribute('oculus-quest-controls', controlConfiguration);
    el.setAttribute('vive-focus-controls', controlConfiguration);
    el.setAttribute('oculus-go-controls', controlConfiguration);
  }
});
