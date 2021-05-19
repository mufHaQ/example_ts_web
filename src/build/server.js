"use strict";
// import
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    constructor(port, host, app) {
        this.port = port;
        this.host = host;
        this.app = app;
    }
    run() {
        this.app.listen(this.port, () => {
            console.log(`Listening at http://${this.host}:${this.port}`);
        });
    }
}
exports.default = Server;
