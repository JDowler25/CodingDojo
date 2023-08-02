from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
from flask_app.models.model_user import User
bcrypt = Bcrypt(app)

@app.route('/')
def new_user():
    return render_template('index.html')


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

@app.route('/create/user', methods = ['POST'])
def create_user():
    data = {
        **request.form
    }
    is_valid = User.registration(request.form)
    if not is_valid:
        return redirect('/') 
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    # put the pw_hash into the data dictionary
    data['password'] = pw_hash
    # Call the save @classmethod on User
    user_id = User.create(data)
    # store user id into session
    session['data'] = user_id
    # user_id = User.create(data_dict)
    # session['user_id'] = user_id
    return redirect('/profile')

@app.route('/login/user', methods = ['POST'])
def login():
    data= {
        **request.form
    }
    is_valid = User.login_validator(data)
    if not is_valid:
        return redirect('/') 
    else:
        session['email'] = data['email']
        user = User.get_by_email({'email': session['email']})
        session['data'] = user.id
    return redirect('/profile')

@app.route('/profile')
def profile_page():
    if 'data' in session:
        user = User.get_one(session['data'])
        # return redirect('/')
    return render_template('Profile.html', user=user)