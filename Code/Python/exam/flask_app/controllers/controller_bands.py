from flask_app import app
from flask import render_template, request, redirect, session
from flask_app.models.model_band import Band
from flask_app.models.model_user import User

@app.route('/band/new')
def new_band():
    user = User.get_one(session['user_id'])
    return render_template('create_band.html', user=user)

@app.route('/band/create', methods = ['POST'])
def create_band():
    data = {
        **request.form,
        'user_id': session['user_id']
    }
    if not Band.required_fields(request.form):
        return redirect('/band/new')
    Band.create(data)
    return redirect('/dashboard')

@app.route('/band/edit/<int:id>')
def edit_band(id):
    if 'user_id' not in session:
        return redirect('/')
    user = User.get_one(session['user_id'])
    band = Band.get_one_band(id)
    return render_template('edit_band.html', user=user, band=band)

@app.route('/band/update/<int:id>', methods = ["POST"])
def update(id):
    data = {
        **request.form,
        'user_id': session['user_id'],
        'id': id
    }
    if not Band.required_fields(request.form):
        return redirect('/dashboard')
    Band.update(data)     
    return redirect(f'/band/view/{id}')

@app.route('/band/view/<int:id>')
def view_band(id):
    if 'user_id' not in session:
        return redirect('/')
    user = User.get_one(session['user_id'])                                            
    user_bands = Band.get_user_bands({'id': session['user_id']})
    return render_template('view_band.html', user=user, user_bands=user_bands)
              
@app.route('/band/delete/<int:id>', methods = ["POST"])
def delete_band(id):
    if 'user_id' not in session:
        return redirect('/')
    band_id = int(request.form['band_id'])
    Band.delete({'id': band_id})
    return redirect(f'/band/view/{id}')                   

@app.route('/dashboard/band/delete/<int:id>', methods = ["POST"])
def dashboard_delete_band(id):
    if 'user_id' not in session:
        return redirect('/')
    band_id = int(request.form['band_id'])
    Band.delete({'id': band_id})
    return redirect('/dashboard')                   