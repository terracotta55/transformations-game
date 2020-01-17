export class Triangle {
    constructor(ax, ay, bx, by, cx, cy) {
        this.a = { x: ax, y: ay };
        this.b = { x: bx, y: by };
        this.c = { x: cx, y: cy };
    }

    translate(tx, ty) {
        this.a.x = this.a.x + tx;
        this.a.y = this.a.y + ty;
        this.b.x = this.b.x + tx;
        this.b.y = this.b.y + ty;
        this.c.x = this.c.x + tx;
        this.c.y = this.c.y + ty;
    }

    rotate(px, py, degrees) {
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
        if (axis === "x" ) {
            this.a.y = this.a.y * -1;
            this.b.y = this.b.y * -1;
            this.c.y = this.c.y * -1;
        } else {
            this.a.x = this.a.x * -1;
            this.b.x = this.b.x * -1;
            this.c.x = this.c.x * -1;
        }
    }
}