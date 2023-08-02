from flask import Flask
from flask_bcrypt import Bcrypt 

DATABASE = 'users_paintings'

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "do not forget to add secret key"