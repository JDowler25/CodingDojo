# Pre-Checklist install
installing pipenv on global scope 

`!only needs to be done once!`

```
pip install pipenv
```

# Start of Checklist 
- create a folder for our new assignment 
- Go into that folder 
- create the virtual env with flask

```
pipenv install flask
```
- WARNING! make sure pipfile & pipfile.lock are there !! If not fix this NOW!
- activate virtual env
    ```
    pipenv shell
    ```
- create server.py
    ```py
    from flask import Flask  # Import Flask to allow us to create our app
    app = Flask(__name__)    # Create a new instance of the Flask class called "app"
    @app.route('/')          # The "@" decorator associates this route with the function immediately following
    def hello_world():
        return 'Hello World!'  # Return the string 'Hello World!' as a response
    if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
        app.run(debug=True)    # Run the app in debug mode.
    ```
