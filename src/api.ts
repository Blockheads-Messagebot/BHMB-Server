import { WorldApi, WorldInfo, WorldLists, WorldOverview, LogEntry } from 'blockheads-api/api'

const jsonHeaders = new Headers([['Content-Type', 'application/json']])

export class Api implements WorldApi {
    constructor() { }

    getLists(): Promise<WorldLists> {
        return fetch('/lists')
            .then(r => r.json())
    }
    setLists(lists: WorldLists): Promise<void> {
        return fetch('/lists', { method: 'POST', headers: jsonHeaders, body: JSON.stringify(lists) })
            .then(() => { })
    }
    getOverview(): Promise<WorldOverview> {
        return fetch('/overview')
            .then(r => r.json())
            .then((overview: WorldOverview) => {
                overview.created = new Date(overview.created)
                overview.credit_until = new Date(overview.credit_until)
                overview.last_activity = new Date(overview.last_activity)
                return overview
            })
    }
    getLogs(): Promise<LogEntry[]> {
        return fetch('/logs')
            .then(r => r.json())
            .then((lines: LogEntry[]) => {
                lines.forEach(line => line.timestamp = new Date(line.timestamp))
                return lines
            })
    }
    send(message: string): Promise<void> {
        return fetch('/send', { method: 'POST', headers: jsonHeaders, body: JSON.stringify({ message }) })
            .then(() => { })
    }
    getMessages(lastId: number): Promise<{ nextId: number; log: string[]; }> {
        return fetch('/messages', { method: 'POST', headers: jsonHeaders, body: JSON.stringify({ lastId }) })
            .then(r => r.json())
    }
    start(): Promise<void> {
        return fetch('/start')
            .then(() => { })
    }
    stop(): Promise<void> {
        return fetch('/stop')
            .then(() => { })
    }
    restart(): Promise<void> {
        return fetch('/restart')
            .then(() => { })
    }
}

export function getWorlds(): Promise<WorldInfo[]> {
    return fetch('/worlds')
        .then(r => r.json())
}
