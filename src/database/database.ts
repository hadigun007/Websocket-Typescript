import mysql, { Connection } from 'mysql2'

export default class Database {
    private connection: Connection | undefined;

    public get_instance() {

        if (this.connection != undefined) {
            return this.connection;
        }
        else {
            return this.connect()
        }
    }

    public connect() {

        if (this.connection != undefined) {
            return;
        }

        this.connection = mysql.createConnection({
            user: 'root',
            password: '',
            database: 'websocket_db',
        });

        this.connection.on('error', () => {
            console.log('database connection error')
        })

        this.connection.on('connect', () => {
            console.log('database connection success')
        })

        this.connection.on('end', () => {
            console.log('database connection ended')
        })

        return this.connection
    }
}
