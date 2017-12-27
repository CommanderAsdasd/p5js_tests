#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standart_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.www, clamp(p - K.xxx, 0.0, 1.0), c.x);
}

void main ( void ) {

    vec2 position = ( gl_FragCoord.xy / resolution.xy ) + vec2(-.5,-0.5);

    vec2 z = position*4.;
    vec2 customV = vec2(.35, sin(time*0.1)*0.6);
    vec3 col = vec3(0.0);
    for(int i=0;i<32;i++) {
        vec2 nz = vec2(z.x*z.x-z.y*z.y,2.*z.x*z.y)+customV + mouse * 0.1;
        z = nz;
        float d = dot(nz,nz);
        if(d>10.){
            break;
        }   

        col.r += sin(d)/64.;
        col.g += cos(d*d)/64.;

        col+=(1./d*d )/30.;
    }

    gl_FragColor = vec4((col),1 );
}