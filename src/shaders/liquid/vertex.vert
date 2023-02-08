uniform float u_time;

varying float v_posY;

#include "../lygia/generative/pnoise.glsl"

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin((modelPosition.z * 2.0) + u_time) * 0.2;
  modelPosition.y += cos((modelPosition.x * 2.0) + u_time) * 0.2;

  modelPosition.y += pnoise(vec2(modelPosition.x + u_time / 4.0, modelPosition.z + u_time / 4.0),vec2(18.0, 18.0));
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  v_posY = modelPosition.y;
  gl_Position = projectedPosition;
}