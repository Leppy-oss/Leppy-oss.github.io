import constants from '../components/base/constants';
import { cross, dot, Vector3 } from './linalg';

export function dist(x1, y1, x2, y2) {
    return (Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)));
}

export function convert(x, canvas) {
    return x * canvas.width / constants.CANVAS_DIM;
}

export function epsilonEquals(x, y) {
    return (Math.abs(x - y) < constants.EPSILON);
}

export function triangleArea(a, b, c) {
    return Math.abs((a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) / 2);
}

export function SameSide(p1, p2, A, B) {
    const cp1 = B.minus(A).cross(p1.minus(A));
    const cp2 = B.minus(A).cross(p2.minus(A));
    return cp1.dot(cp2) >= 0;
}

export function isInTriangle(mX, mY, x1, y1, x2, y2, x3, y3) {
    const p = new Vector3(mX, mY);
    const A = new Vector3(x1, y1);
    const B = new Vector3(x2, y2);
    const C = new Vector3(x3, y3);
    return SameSide(p, A, B, C) && SameSide(p, B, A, C) && SameSide(p, C, A, B);
}