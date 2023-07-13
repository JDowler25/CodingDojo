from flask import Flask, render_template
app = Flask(__name__)                     
    
@app.route('/')
def play():
    return render_template('index.html', rows=8, cols=8)

@app.route('/x')
def play_x_times(x):
    rows = int(x)
    return render_template('index.html', rows=x, cols=8)

@app.route('/<x>/<y>')
def play_x_times_with_color(x,y):
    rows = int(x)
    cols = int(y)
    return render_template('index.html', rows=x, cols=y)

@app.route('/<x>/<y>/<color1>/<color2>')
def custom_checkerboard_colors(x, y, color1, color2):
    rows = int(x)
    cols = int(y)
    return render_template('checkerboard.html', rows=x, cols=y, color1=color1, color2=color2)

if __name__=="__main__":
    app.run(debug=True)                   
