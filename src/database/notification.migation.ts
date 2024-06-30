import Database from './database';
import db from './database'
import mysql from 'mysql2'

export default class NotificationMigration {
    private table_name = 'notifications';
    private db = new Database().get_instance()

    public run() {
        this.db!.execute(`
            CREATE TABLE ${this.table_name} (
            id INT PRIMARY KEY,
            sender_id INT,
            receiver_id INT,
            title VARCHAR(255), 
            chanel VARCHAR(255), 
            message VARCHAR(255), 
            readed BOOLEAN
            );
            `, (error:mysql.QueryError) => {
                if(error){
                    console.log(`${this.table_name} migrations error ❌`);
                    console.log(error.message);
                }else{
                    console.log(`${this.table_name} migrations success ✅`);
                }
                
        })
    }
}
