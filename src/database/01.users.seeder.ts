import Database from "./database";
import mysql from 'mysql2'


export default class UserSeeder {
    private table_name = 'users';
    private db = new Database().get_instance()

    public run() {
        this.db!.execute(`
        INSERT INTO ${this.table_name} (
        id, username, password, email
        )VALUES(
1, 'hadi', 'adminsku', 'hadi@mail.com'
        );
        `, (error: mysql.QueryError) => {
            if (error) {
                console.log(`${this.table_name} seeding error ❌`);
                console.log(error.message);
            } else {
                console.log(`${this.table_name} seeding success ✅`);
            }

        })
    }
}