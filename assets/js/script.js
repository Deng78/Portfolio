particlesJS.load('header-wrapper', 'particles.json');

// init typed.js
const typedConfig = {
  strings: ['DEVELOPER^1500', 'DESIGNER',],
  typeSpeed: 100,
  loop: true,    
}
let typed = new Typed('#desc', typedConfig);