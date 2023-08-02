from flask_app import app
from flask import render_template, request, redirect, session
from flask_app.models.model_painting import Painting
from flask_app.models.model_user import User

@app.route('/painting/new')
def new_painting():
    user = User.get_one(session['user_id'])
    return render_template('create_painting.html', user=user)

@app.route('/painting/create', methods = ["POST"])
def create_painting():
    data = {
        **request.form,
        'user_id': session['user_id']
    }
    if not Painting.required_fields(request.form):
        return redirect('/painting/new')
    Painting.create(data)
    return redirect('/dashboard')

@app.route('/painting/edit/<int:id>')
def edit_painting(id):
    if 'user_id' not in session:
        return redirect('/')
    user = User.get_one(session['user_id'])
    painting = Painting.get_one_painting(id)
    return render_template('edit_painting.html', user=user, painting=painting)

@app.route('/painting/update/<int:id>', methods = ["POST"])
def update(id):
    data = {
        **request.form,
        'user_id': session['user_id'],
        'id': id
    }
    if not Painting.required_fields(request.form):
        return redirect(f'/painting/edit/{id}')
    Painting.update(data)
    return redirect(f'/painting/view/{id}')

@app.route('/painting/view/<int:id>')
def view_painting(id):
    if 'user_id' not in session:
        return redirect('/')
    user = User.get_one(session['user_id'])                                            
    painting = Painting.get_one_painting(id)
    return render_template('view_painting.html', user=user, painting=painting)
              
@app.route('/painting/delete/<int:id>', methods = ["POST"])
def delete_painting(id):
    if 'user_id' not in session:
        return redirect('/')
    painting_id = int(request.form['painting_id'])
    Painting.delete({'id': painting_id})
    return redirect(f'/painting/view/{id}')                   

@app.route('/dashboard/painting/delete/<int:id>', methods = ["POST"])
def dashboard_delete_painting(id):
    if 'user_id' not in session:
        return redirect('/')
    painting_id = int(request.form['painting_id'])
    Painting.delete({'id': painting_id})
    return redirect('/dashboard')