from flask import Flask, redirect, render_template, request, url_for


app = Flask(__name__)

@app.route('/')
def landingPad():
    return render_template("homepage.html")
