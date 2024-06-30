import UserSeeder from "./01.users.seeder"

function main(){
    const users = new UserSeeder()

    users.run()
}

main()