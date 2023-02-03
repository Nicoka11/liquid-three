varying vec4 modelPosition;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 1.0, modelPosition.x / 10.0);
}