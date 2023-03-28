typeOrmEnity:
Migration : changes the structure of the db.
we can change the table structur adding new column.
"synchronize: true" in module decorator for development perpose,
it will migrate the db structure when entity is updated.  

app.module
@Module({
    TypeOrmModule.forRoot({
        type:'sqlite',
        database:'db.sqlite',
        entities:[User,Report],
        sychronize:true
    })
})