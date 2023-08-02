from flask_app import app
from flask import render_template, request, redirect, session
from flask_app.models.model_recipe import Recipe
from flask_app.models.model_user import User

@app.route('/recipe/new')
def new_recipe():
    return render_template('create_recipe.html')

@app.route('/recipe/create', methods = ['POST'])
def create_recipe():
    data = {
        **request.form,
        'user_id': session['user_id']
    }
    Recipe.create(data)
    return redirect('/profile')

@app.route('/recipe/view/<int:id>')
def view_recipe(id):
    if 'user_id' not in session:
        return redirect('/')
    user = User.get_one(session['user_id'])
    recipe = Recipe.get_one_recipe(id)
    return render_template('view_recipe.html', user=user, recipe=recipe)

@app.route('/recipe/edit/<int:id>')
def edit_recipe(id):
    if 'user_id' not in session:
        return redirect('/')
    user = User.get_one(session['user_id'])
    recipe = Recipe.get_one_recipe(id)
    return render_template('edit_recipe.html', user=user, recipe=recipe)

@app.route('/recipe/update/<int:id>', methods = ["POST"])
def update(id):
    data = {
        **request.form,
        'user_id': session['user_id'],
        'id': id
    }
    if not Recipe.required_fields(request.form):
        return redirect('/profile')
    Recipe.update(data)
    return redirect(f'/recipe/view/{id}')