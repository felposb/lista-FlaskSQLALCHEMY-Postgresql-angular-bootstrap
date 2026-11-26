from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy import select

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = ('postgresql://postgres:aaaaaa@localhost:aaaaa/aaaaaaaa')

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
class Pessoa(db.Model):
    __tablename__ = "nomes"
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50))

CORS(app)

@app.get("/pessoa")
def getPessoa():
    with app.app_context():
        pessoas = Pessoa.query.limit(50).all()
        return jsonify([{
            "id": p.id,
            "nome": p.nome
        } for p in pessoas])
@app.post("/pessoa/criar")
def criarPessoa():
    dados = request.get_json()
    criado = Pessoa(
            nome=dados["nome"]
        )
    db.session.add(criado)
    db.session.commit()
    return jsonify({
        "id": criado.id,
        "nomes": criado.nome
    })
    
app.run(debug=True, host="0.0.0.0", port=5000)