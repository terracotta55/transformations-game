import { evaluateBoundary } from './evaluate.js'
const cloneDeep = require('lodash/cloneDeep');

export class Triangle {
    constructor(coordinates) {
        const [ax, ay, bx, by, cx, cy] = coordinates;

        this.a = { x: ax, y: ay };
        this.b = { x: bx, y: by };
        this.c = { x: cx, y: cy };
        this.completed = false;
    }

    translate(tx, ty) {
        this.a.x = this.a.x + tx;
        this.a.y = this.a.y + ty;
        this.b.x = this.b.x + tx;
        this.b.y = this.b.y + ty;
        this.c.x = this.c.x + tx;
        this.c.y = this.c.y + ty;
    }

    rotate(degrees, px = 0, py = 0) {
        const ax = this.a.x;
        const ay = this.a.y;
        const bx = this.b.x;
        const by = this.b.y;
        const cx = this.c.x;
        const cy = this.c.y;

        const theta = (Math.PI / 180) * degrees;

        this.a.x = Math.round(((ax - px) * Math.cos(theta)) + ((ay - py) * Math.sin(theta)) + px);
        this.a.y = Math.round(((ay - py) * Math.cos(theta)) - ((ax - px) * Math.sin(theta)) + py);
        this.b.x = Math.round(((bx - px) * Math.cos(theta)) + ((by - py) * Math.sin(theta)) + px);
        this.b.y = Math.round(((by - py) * Math.cos(theta)) - ((bx - px) * Math.sin(theta)) + py);
        this.c.x = Math.round(((cx - px) * Math.cos(theta)) + ((cy - py) * Math.sin(theta)) + px);
        this.c.y = Math.round(((cy - py) * Math.cos(theta)) - ((cx - px) * Math.sin(theta)) + py);
    }

    reflect(axis) {
        if (axis === "x") {
            this.a.y = this.a.y * -1;
            this.b.y = this.b.y * -1;
            this.c.y = this.c.y * -1;
        } else {
            this.a.x = this.a.x * -1;
            this.b.x = this.b.x * -1;
            this.c.x = this.c.x * -1;
        }
    }

    randomizeLocation() {
        const transformations = [
            { method: "rotate", params: 90 },
            { method: "rotate", params: -90 },
            { method: "reflect", params: "x" },
            { method: "reflect", params: "y" },
            { method: "rotate", params: 0 }];

        do {
            var clone = cloneDeep(this);
            const trans = transformations[Math.floor(Math.random() * 5)];
            console.log(trans)

            clone[trans.method](trans.params);

            //Commented out for easier matching
            //clone.translate(Math.round((Math.random() - 0.5) * 6), Math.round((Math.random() - 0.5) * 6));
            console.log(clone.a, clone.b, clone.c);
        } while (evaluateBoundary(clone));
        this.a = clone.a;
        this.b = clone.b;
        this.c = clone.c;
    }
}