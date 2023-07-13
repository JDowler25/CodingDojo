from flask import Flask, render_template  # added render_template!
app = Flask(__name__)                     
    
@app.route('/')                           
@app.route('/<int:num>')                           
def hello_world(num = 99):

    return render_template('index.html',num==num)  
    
if __name__=="__main__":
    app.run(debug=True)                   

