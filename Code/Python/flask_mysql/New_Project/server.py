from flask import Flask, render_template, request, session, redirect, url_for
# import the class from friend.py
from friend import Friend
app = Flask(__name__)

@app.route("/")
def index():
    # call the get all classmethod to get all friends
    friends = Friend.get_all()
    print(friends)
    return render_template("index.html", friends=friends)

@app.route('/create_friend', methods=["GET","POST"])
def create_friend():
    if request.method == 'POST':
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
        data = {
            **request.form
        }
    # We pass the data dictionary into the save method from the Friend class.
        Friend.save(data)
    # Don't forget to redirect after saving to the database.
        return redirect('/')
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
