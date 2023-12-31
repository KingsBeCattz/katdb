import { TypedEmitter } from "tiny-typed-emitter"

interface KatDataBaseOptions {
    path: string,
    tables: string[]
}

interface Events {
    start: (db: KatDataBase) => Promise<any> | any
    close: () => Promise<any> | any
    set: (key: string, value: any, table: string) => Promise<any> | any
    get: (key: string, table: string, output: any) => Promise<any> | any
    delete: (key: string, table: string, output: any) => Promise<any> | any
    push: (key: string, value: any, table: string, output: any) => Promise<any> | any
    remove: (key: string, value: any, table: string, output: any) => Promise<any> | any
    add: (key: string, value: number, table: string, output: any) => Promise<any> | any
    sub: (key: string, value: number, table: string, output: any) => Promise<any> | any
    has: (key: string, table: string, output: any) => Promise<any> | any
}

export class KatDataBase extends TypedEmitter<Events> {
    path: string
    tables: string[]
    /**
     * Builds the Database
     */
    constructor(options: KatDataBaseOptions)

    /**
     * Set a value
     */
    set <T> (key: string, value: T, table: typeof this.tables[number]): Promise<T>

    /**
     * Gets a value from the provided key and table
     */
    get (key: string, table: typeof this.tables[number]): Promise<any>

    /**
     * Deletes a key from the provided table
     * @returns boolean
     */
    delete(key: string, table: typeof this.tables[number]): Promise<boolean>

    /**
     * Pushs a value from the provided key and table
     */
    push <T> (key: string, value: T, table: typeof this.tables[number]): Promise<any[]>

    /**
     * Removes a value from the provided key and table
     */
    remove <T> (key: string, value: T, table: typeof this.tables[number]): Promise<any[]>

    /**
     * Removes and return the first value from the provided key and table
     */
    shift (key: string, table: typeof this.tables[number]): Promise<any>

    /**
     * Adds values and return the new array value from the provided key and table using a index
     */
    unshift <T> (key: string, value: T | T[], table: typeof this.tables[number]): Promise<any>

    /**
     * Removes and return the last value from the provided key and table
     */
    pop (key: string, table: typeof this.tables[number]): Promise<any>

    /**
     * Adds a value from the provided key and table
     */
    add (key: string, value: number, table: typeof this.tables[number]): Promise<number>

    /**
     * Substracts a value from the provided key and table
     */
    sub (key: string, value: number, table: typeof this.tables[number]): Promise<number>

    /**
     * Multiply a value from the provided key and table
     */
    multi (key: string, value: number, table: typeof this.tables[number]): Promise<number>

    /**
     * Divide a value from the provided key and table
     */
    divide (key: string, value: number, table: typeof this.tables[number]): Promise<number>

    /**
     * Verify if the key exists in provided table
     */
    has (key: string, table: typeof this.tables[number]): Promise<boolean>

    /**
     * Gets the latency of the database
     */
    ping (): Promise<number>

    /**
     * Gets all data in the provided table
     */
    getTable(name: (typeof this.tables)[number]): object | null

    /**
     * Inserts data on the provided table
     */
    private insert(name: string, data: object): void

    /**
     * Checks if is a valid table
     */
    isValidTable(table: (typeof this.tables)[number]): boolean

    /**
     * Starts the database
     */
    start(): void
}