window['mat4'] = glMatrix.mat4; console.log(mat4);
window['vec3'] = glMatrix.vec3; console.log(vec3);

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

if (!gl) {
    throw new Error('WebGL not supported.')
}

//alert ('WebGL supported.');



function sphere(...position) {
    const R = 1;

    const normalize1D = n => n/Math.abs(n);
    let [r, a, b] = position.map(n=> n + 0.5);
    r *= R;
    a *= 2 * Math.PI;   // 0 < a < 2PI
    b = position[2] * 2;   // -1 < b < 1

    let x = r * Math.cos(a);
    let y = r * Math.sin(a);
    let z = b * Math.sqrt(R*R-r*r);

    return [x,y,z];
}
function sphereShell(...position) {
    return vec3.normalize(vec3.create(), position);
}

function createPointCloud(pointFunction, pointCount) {
    const pointCloud = [];
    for (let i = 0; i < pointCount; i++) {
        const r = () => Math.random() - 0.5;
        const point = pointFunction(r(), r(), r());
        pointCloud.push(...point);
    }
    return pointCloud;
  }




// const vertexData = createPointCloud(sphere, 1e5);
const vertexData = createPointCloud(sphereShell, 1e4*7.5);


const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);


const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
precision mediump float;
attribute vec3 position;
varying vec3 vColor;
uniform mat4 matrix;
void main() {
    vColor = vec3(position.xy * 0.5 +0.5,1);
    gl_Position = matrix * vec4(position, 1);
    gl_PointSize = 1.0;
}
`);
gl.compileShader(vertexShader);


const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
precision mediump float;
varying vec3 vColor;
void main() {
    gl_FragColor = vec4(vColor, 1);
}
`);
gl.compileShader(fragmentShader);

console.log(gl.getShaderInfoLog(fragmentShader));

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);


const positionLocation = gl.getAttribLocation(program, 'position');
gl.enableVertexAttribArray(positionLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

gl.useProgram(program);
gl.enable(gl.DEPTH_TEST);


const uniformLocations = {
    matrix: gl.getUniformLocation(program, 'matrix'),
};

const modelMatrix = mat4.create();
const viewMatrix = mat4.create();
const projectionMatrix = mat4.create();
mat4.perspective(projectionMatrix, 
    75 * Math.PI/180,//vertical field of view (angle, radians)
    canvas.width/canvas.height,//aspect W/H
    1e-4,
    1e4,);
const mvMatrix = mat4.create();
const mvpMatrix = mat4.create();


mat4.translate(modelMatrix, modelMatrix, [0, 0, 0]);

mat4.translate(viewMatrix, viewMatrix, [0, 0, 2]);
mat4.invert(viewMatrix, viewMatrix);


function animate () {
    requestAnimationFrame(animate);

    mat4.rotateY(modelMatrix, modelMatrix, 0.008);

    mat4.multiply(mvMatrix, viewMatrix, modelMatrix);
    mat4.multiply(mvpMatrix, projectionMatrix, mvMatrix);
    gl.uniformMatrix4fv(uniformLocations.matrix, false, mvpMatrix);
    gl.drawArrays(gl.POINTS, 0, vertexData.length/3);

}


animate();

