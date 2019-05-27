from flask import Flask, render_template, request, session, g, redirect, url_for,abort, flash, json, jsonify

app = Flask(__name__)
app.config.from_object(__name__)
@app.route('/', methods = ['POST','GET'])
def index():
    author = "Brax"
    return render_template('index.html', author=author)

if __name__ == "__main__":
    app.debug=True
    app.run(host='0.0.0.0')
