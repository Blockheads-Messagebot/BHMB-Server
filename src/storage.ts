import { Storage as IStorage } from '@bhmb/bot'

const headers = new Headers({ 'Content-Type': 'application/json'})

const blacklist = [ '/mb_players' ]

function onChange() {
  let storage = { ... localStorage }
  for (let key in storage) {
    if (blacklist.includes(key)) {
      delete storage[key]
    }
  }

  fetch('/storage', {
    method: 'POST',
    headers,
    body: JSON.stringify(storage)
  })
}

export async function load(): Promise<void> {
  localStorage.clear()
  let storage = await fetch('/storage').then(r => r.json())
  Object.keys(storage).forEach(key => {
    localStorage.setItem(`/${key}`, storage[key])
  })
}

export class Storage extends IStorage {
  constructor(private head: string) {
    super()
    // For readability
    this.head += '/'
  }

  get<T>(key: string, fallback: T): T {
    // JSON.parse correctly handles null so it's fine to declare this as string.
    let item = localStorage.getItem(this.head + key) as string
    try {
      let parsed = JSON.parse(item)
      return parsed == null ? fallback : parsed
    } catch {
      return fallback
    }
  }

  set(key: string, value: any): void {
    localStorage.setItem(this.head + key, JSON.stringify(value))
    onChange()
  }

  clear(prefix: string = ''): void {
    this.keys(prefix)
      .forEach(key => localStorage.removeItem(this.head + key))
    onChange()
  }

  keys(prefix: string = ''): string[] {
    return Object.keys(localStorage)
    .filter(key => key.startsWith(this.head + prefix))
    .map(key => key.substr(this.head.length))
  }

  prefix(prefix: string): IStorage {
    return new Storage(this.head + prefix)
  }
}
