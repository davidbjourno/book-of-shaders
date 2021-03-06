// Preprocessor macros
// Only insert line if `GL_ES` is defined (mostly happens when code is compiled on mobile devices/
// browsers)
#ifdef GL_ES
// Specify precision (low/medium/high) of each variable that uses floating point
precision mediump float;
#endif

// GLSL has a single `main` function, here returning a colour
void main() {
  // Final pixel color is assigned to reserved global variable `gl_FragColor`
  // `vec4` is a GLSL **type**, i.e. four-dimensional vector of floating-point precision
  // Four vector arguments correspond to red, green, blue and alpha channels (normalised values)
  gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
}
