from flask import Flask, render_template
app = Flask(__name__)                     
    
@app.route('/play')
def play():
    return render_template('index.html', count=3, color='blue')

@app.route('/play/<x>')
def play_x_times(x):
    count = int(x)
    return render_template('index.html', count=count, color='blue')

@app.route('/play/<x>/<color>')
def play_x_times_with_color(x,color):
    count = int(x)
    return render_template('index.html', count=count, color=color)

if __name__=="__main__":
    app.run(debug=True)                   
