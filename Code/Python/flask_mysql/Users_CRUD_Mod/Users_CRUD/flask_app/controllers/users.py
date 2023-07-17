from flask import render_template, redirect, request
from flask_app import app
from flask_app.models.user import User

@app.route('/')
def homepage():
    return render_template('read.html', users = User.get_all())

@app.route('/create')
def create():
    return render_template('create.html')

@app.route('/<int:id>/edit')
def edit(id):
    return render_template('edit.html', user = User.get_one(id))

@app.route('/<int:id>/user_profile')
def user_profile(id):
    return render_template('profile.html', user = User.get_one(id))

@app.route('/update_user', methods = ['POST'])
def update_user():
    User.update(request.form)
    return redirect('/')


@app.route('/create_user', methods = ['POST'])
def create_user():
    User.save(request.form)
    return redirect('/')

@app.route('/user/<int:id>/destroy')
def destroy(id):
    User.destroy(id)
    return redirect('/')