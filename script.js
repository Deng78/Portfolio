particlesJS.load('part', 'particles.json', () => console.log('callback - particles.js config loaded'));

// init typed.js
const typedConfig = {
  strings: ['DEVELOPER^1500', 'DESIGNER',],
  typeSpeed: 100,
  loop: true,    
}
let typed = new Typed('#desc', typedConfig);