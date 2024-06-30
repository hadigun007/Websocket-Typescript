import Database from "./database";
import NotificationMigration from "./notification.migation"
import UsersMigration from "./users.migation";

function main(){
    const notifications = new NotificationMigration()
    const users = new UsersMigration()

    notifications.run();
    users.run()

}

main()