from flask import Flask, render_template, redirect, request
# import the class from friend.py
from user import User
app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('read.html', users = User.get_all())

@app.route('/create')
def create():
    return render_template('create.html')

@app.route('/create_user', methods = ['POST'])
def create_user():
    User.save(request.form)
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
