varying float v_posY;

vec4 color_1;
vec4 color_2;

void main() {

  color_1 = vec4(0.92, 0.01, 0.33, 1.0);
  color_2 = vec4(0.00, 1.00, 0.92, 1.0);
  gl_FragColor = mix(color_1, color_2, v_posY);
}