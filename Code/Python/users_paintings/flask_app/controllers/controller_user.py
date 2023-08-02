from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
from flask_app.models.model_user import User
from flask_app.models.model_painting import Painting
bcrypt = Bcrypt(app)

# ---------LANDING PAGE------------
@app.route('/')
def new_user():
    return render_template('index.html')


# ---------Create User------------
@app.route('/create/user', methods = ['POST'])
def create_user():
    data = {
        **request.form,
        'confirm_password': request.form['confirm_password']
    }
    is_valid = User.registration(request.form)
    if not is_valid:
        return redirect('/') 
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    data['password'] = pw_hash
    user_id = User.create(data)
    session['user_id'] = user_id
    return redirect('/dashboard')


# ---------User Login------------
@app.route('/login/user', methods = ['POST'])
def login():
    if not User.login_validator(request.form):
        return redirect('/')
    user = User.get_by_email(request.form)
    session['user_id'] = user.id
    return redirect('/dashboard')

# ---------Dashboard Page------------
@app.route('/dashboard')
def dashboard_page():
    if 'user_id' not in session:
        return redirect('/')
    user = User.get_one(session['user_id'])
    all_paintings = Painting.get_paintings()
    return render_template('dashboard.html', user=user, all_paintings=all_paintings)

# ---------Logout------------
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')