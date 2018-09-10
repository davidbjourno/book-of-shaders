#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution; // `gl_FragCoord` returns the screen coordinates of the pixel (screen fragment) the active thread is working on
                                            // `gl_FragCoord` is called a **varying** instead of a uniform because it varies from thread to thread
                                            // Dividing `gl_FragCoord` by the resolution (i.e. the maximum xy coordinates) of the DOM element normalises its values to between 0.0 and 1.0, enabling mapping to RGBA channels

  gl_FragColor = vec4(st.x, st.y, 0.0, 1.0);
}
