from flask_app import app
from flask import render_template, request, redirect, session  
           
from flask_app.models.model_user import User

@app.route('/')
def form():
    return render_template('index.html')

@app.route('/create', methods = ['POST'])
def create():
    if request.method == 'POST':
        data = {
            **request.form
        }
        User.create(data)
    return redirect('/result')

@app.route('/result')
def result():
    submitted = User.get_one('1')
    return render_template('result.html', submitted=submitted)
