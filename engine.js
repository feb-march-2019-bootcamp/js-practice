const engineStatuses = Object.freeze({
    STARTED: 2,
    STARTING: 1,
    STOPPED: 0,
})

export default class Engine
{
    constructor(name) {
        this.name = name;
        this.status = engineStatuses.STOPPED;
    }

    start() {
        this.status = engineStatuses.STARTING;
        setTimeout(() => {
            this.status = engineStatuses.STARTED;
        }, 10)
    }

    stop() {
        this.status = engineStatuses.STOPPED;
    }

    isStarted() {
        return this.status === engineStatuses.STARTED;
    }
}
