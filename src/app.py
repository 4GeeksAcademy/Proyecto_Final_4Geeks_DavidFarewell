import os
from flask import Flask, jsonify
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS

from src.api.routes import api
from src.api.db import db
from src.api.admin import setup_admin

def create_app():
    app = Flask(__name__)
    app.url_map.strict_slashes = False

    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "sqlite:///levelup.db")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = os.getenv("SECRET_KEY", "super-secret")
    app.secret_key = 'super secret key'

    db.init_app(app)
    Migrate(app, db)
    JWTManager(app)
    CORS(app, origins=["https://cautious-trout-97jr665jxjvxc9p59-3000.app.github.dev"], supports_credentials=True)# <--- Esto permite peticiones desde tu frontend

    setup_admin(app)
    app.register_blueprint(api, url_prefix="/api")

    @app.route("/")
    def home():
        return jsonify({"message": "LevelUp API is working 🚀"})

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=5000, debug=True)
