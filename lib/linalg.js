export class Vector3 {
    constructor(x, y, z=0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    plus(other) {
        return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
    }

    minus(other) {
        return new Vector3(this.x - other.x, this.y - other.y, this.z - other.z);
    }

    norm() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }

    dot(other) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    angle(other) {
        return Math.acos(this.dot(other) / (this.norm() * other.norm()));
    }

    cross(other) {
        return new Vector3(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x);
    }
}