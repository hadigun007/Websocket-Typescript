import Database from './database';
import mysql from 'mysql2'

export default class UsersMigration {
    private table_name = 'users';
    private db = new Database().get_instance()

    public run() {
        this.db!.execute(`
            CREATE TABLE ${this.table_name} (
            id INT PRIMARY KEY,
            username VARCHAR(255),
            password VARCHAR(255),
            email VARCHAR(255),
            ws_token VARCHAR(255)
            );
            `, (error: mysql.QueryError) => {
            if (error) {
                console.log(`${this.table_name} migrations error ❌`);
                console.log(error.message);
            } else {
                console.log(`${this.table_name} migrations success ✅`);
            }

        })
    }
}
