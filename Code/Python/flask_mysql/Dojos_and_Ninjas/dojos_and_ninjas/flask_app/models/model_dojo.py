# import the function that will return an instance of a connection
#       folder  folder  file                    function
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.model_ninja import Ninja
# model the class after the users table from  database
DB = 'dojos_and_ninjas'

class Dojo:
    # should change db based on schema you're trying to access
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(DB).query_db(query)
        # dojos = []
        # Iterate over the db results and create instances of users with cls.
        # for dojo in results:
        #     dojos.append(cls(dojo))
        return results
    
        
    @classmethod
    def create_dojo(cls,data):
        query = "INSERT INTO dojos(name) VALUES(%(name)s);"
        results = connectToMySQL(DB).query_db(query,data)
        return results
    
    @classmethod
    def get_one(cls,id):
        data = {"dojo_id": id}
        query = "SELECT * FROM dojos JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(dojo_id)s"
        results = connectToMySQL(DB).query_db(query,data)
        one_dojo = cls(results[0])
        for dojo in results:
            ninja = {
                'id': dojo["ninjas.id"],
                'first_name': dojo["first_name"],
                'last_name': dojo["last_name"],
                'age': dojo["age"],
                'created_at': dojo['created_at'],
                'update_at': dojo['update_at'],
                'dojo_id': dojo['dojo_id']
            }
            one_dojo.ninjas.append(Ninja(ninja))
        return one_dojo