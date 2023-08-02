 # import the function that will return an instance of a connection
#       folder  folder  file                    function
from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the users table from  database
DB = 'dojo_survey'

class User:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls,data):
        query = "INSERT INTO users(name, location, language, comment) VALUES(%(name)s,%(location)s,%(language)s,%(comment)s);"
        results = connectToMySQL(DB).query_db(query,data)
        return results
    
    @classmethod
    def get_one(cls,id):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL(DB).query_db(query,{'id': id})
        print(results)
        return results[0]
