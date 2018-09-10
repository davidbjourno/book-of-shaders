#ifdef GL_ES
precision mediump float;
#endif

// Define uniforms — global GLSL variables — each with a corresponding type
uniform vec2 u_resolution; // Canvas size (width, height)
uniform vec2 u_mouse; // Mouse position in pixels
uniform float u_time; // Time in seconds since load

void main() {
  gl_FragColor = vec4(abs(sin(u_time)), 0.0, 0.0, 1.0); // Use `u_time` with a sine function to continually modify the shader colour
                                                        // GPU has hardware-accelerated angle, trigonometric and exponential functions
}
