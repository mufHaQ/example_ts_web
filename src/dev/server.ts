// import

export default class Server {
    constructor(
        public port: number,
        public host: string,
        public app: any
    ) { }

    run() {
        this.app.listen(this.port, () => {
            console.log(`Listening at http://${this.host}:${this.port}`)
        })
    }
}