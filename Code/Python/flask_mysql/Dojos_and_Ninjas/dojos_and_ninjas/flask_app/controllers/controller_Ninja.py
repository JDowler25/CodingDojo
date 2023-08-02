from flask_app import app
from flask import render_template, request, redirect, session

from flask_app.models.model_ninja import Ninja
from flask_app.models.model_dojo import Dojo

@app.route('/ninjas/new')
def new_ninja():
    dojo_all = Dojo.get_all()
    return render_template('ninja.html', dojo_all=dojo_all)


@app.route('/ninjas/create', methods = ['POST'])
def create_ninja():
    data = {
        **request.form
    }
    Ninja.create(data)
    return redirect('/dojos')
