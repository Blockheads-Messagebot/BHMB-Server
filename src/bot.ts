import { MessageBot as Bot } from '@bhmb/bot'

export class MessageBot extends Bot implements Bot {
    send(message: string, { ...params }: { [key: string]: string } = {}, user = false): void {
        // Send should not do anything in the browser unless it is the user sending chat
        if (!user) return

        super.send(message, params)
    }
}
