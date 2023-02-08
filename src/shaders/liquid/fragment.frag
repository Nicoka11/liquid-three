varying float v_posY;

vec4 color_1;
vec4 color_2;

void main() {

  color_1 = vec4(0.00, 0.25, 0.14, 1.0);
  color_2 = vec4(0.00, 0.67, 0.08, 1.0);
  gl_FragColor = mix(color_1, color_2, v_posY);
}