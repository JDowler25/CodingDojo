from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'Astro'

@app.route('/', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        session['name'] = request.form['name']
        session['location'] = request.form['location']
        session['language'] = request.form['language']
        session['comments'] = request.form['comments']
        return redirect(url_for('result'))
    return render_template('index.html')

@app.route('/result')
def result():
    # name = session.get('name')
    # location = session.get('location')
    # language = session.get('language')
    # comments = session.get('comments')
    return render_template('result.html')

if __name__=="__main__":
    app.run(debug=True)