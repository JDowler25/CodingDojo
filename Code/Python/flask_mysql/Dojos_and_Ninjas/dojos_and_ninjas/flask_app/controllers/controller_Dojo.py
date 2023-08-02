from flask_app import app
from flask import render_template, request, redirect, session

from flask_app.models.model_dojo import Dojo

#THIS WILL MOVE
@app.route('/dojos')
def landing():
    dojo_all = Dojo.get_all()
    return render_template('index.html', dojo_all=dojo_all)

@app.route('/dojo/<int:dojo_id>/roster')
def dojo_roster(dojo_id):
    roster = Dojo.get_one(dojo_id)
    return render_template('Dojo_Roster.html', roster=roster)
#READ

#CREATE
@app.route('/create/dojos', methods = ['POST'])
def create_dojo():
    data = {
        **request.form
    }
    Dojo.create_dojo(data)
    return redirect('/dojos')
#update

#delete

