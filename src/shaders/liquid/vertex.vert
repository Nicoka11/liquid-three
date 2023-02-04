uniform float u_time;

varying float v_posY;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin((modelPosition.z * 6.0) + u_time) * 0.2;
  modelPosition.y += cos((modelPosition.x * 6.0) + u_time) * 0.2;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  v_posY = modelPosition.y;
  gl_Position = projectedPosition;
}