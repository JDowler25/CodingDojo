from flask import Flask, render_template, session, redirect, url_for

app = Flask(__name__)

app.secret_key = 'Astro'

@app.route('/')
def root():
    if 'counter' in session:
        session['counter'] += 1
    else:
        session['counter'] = 1
    return render_template('index.html', counter=session['counter'])

@app.route('/destoy_session')
def destroy_session():
    session.clear()
    return redirect(url_for('root'))

if __name__=="__main__":
    app.run(debug=True)