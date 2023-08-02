from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the users table from  database
DB = 'dojos_and_ninjas'

class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.update_at = data['update_at']
        self.dojo_id = data['dojo_id']

    @classmethod
    def create(cls,data):
        query = "INSERT INTO ninjas(first_name, last_name, age, dojo_id) VALUES(%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s);"
        results = connectToMySQL(DB).query_db(query,data)
        return results