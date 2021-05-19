export default class Server {
    constructor(
        public port: any,
        public host: string,
        public app: any
    ) {
        this.run()
    }

    run() {
        this.app.listen(this.port, () => {
            console.log(`Listening at http://${this.host}:${this.port}`)
        })
    }
}