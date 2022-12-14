from glob import glob
import json
from urllib import request
from wsgiref.util import request_uri
from flask import Flask, jsonify, request, url_for, Response
from flask_cors import CORS, cross_origin
import BackEnd.Functions as callMethod
import BackEnd.GlobalInfo.ResponseMessages as globalMessages

app = Flask(__name__)
CORS(app)

###############################################################################################################
# ---------------------------------------------------------------------
# -- AUTHOR : Alex Ri
# -- Date : 06-12-2022
# -- Project : Proyecto final ComuGames Redes
# -- Description : Route to Login

@app.route('/api/CGLogin', methods=['POST'])
def CMLogin():
    try:
        strUsername = request.json['strUsername']
        strPassword = request.json['strPassword']
        objectResult = callMethod.CMLogin(strUsername, strPassword)
        return jsonify(objectResult)
    except Exception:
        return jsonify(globalMessages.err500)

###############################################################################################################
# ---------------------------------------------------------------------
# -- AUTHOR : Alex Ri
# -- Date : 06-12-2022
# -- Project : Proyecto final ComuGames Redes
# -- Description : Route to Register

@app.route('/api/CGRegister', methods=['POST'])
def CMRegister():
    try:
        strUsername = request.json['strUsername']
        strPassword = request.json['strPassword']
        objectResult = callMethod.CMRegister(strUsername, strPassword)
        return jsonify(objectResult)
    except Exception:
        return jsonify(globalMessages.err500)

#Este guarda cosas

@app.route('/api/CGNuevaPubli', methods=['POST'])
def CMNuevaPubli():
    try:
        strTPubli = request.json['strTPubli']
        strTitulo = request.json['strTitulo']
        strContenido = request.json['strContenido']
        objectResult = callMethod.CMNuevaPubli(strTPubli, strTitulo, strContenido)
        data=json.dumps(objectResult)
        my_data_file = open('nfs/idspublicaciones.txt', 'a')
        my_data_file.write(data)
        return objectResult
    except Exception:
        return jsonify(globalMessages.err500)

#Este tambien guarda cosas

@app.route('/api/CGNuevoComentario', methods=['POST'])
def CMNuevoComentario():
    try:
        strTPubli = request.json['strTPubli']
        strTitulo = request.json['strTitulo']
        strContenido = request.json['strContenido']
        objectResult = callMethod.CMNuevoComentario(strTPubli, strTitulo, strContenido)
        data=json.dumps(objectResult)
        my_data_file = open('nfs/idscomentarios.txt', 'a')
        my_data_file.write(data)
        return objectResult
    except Exception:
        return jsonify(globalMessages.err500)

@app.route('/api/CGGetPubli', methods=['GET'])
def CMGetPubli():
    try:
        objectResult = callMethod.CMGetPubli()
        return objectResult
    except Exception:
        return jsonify(globalMessages.err500)

@app.route('/api/CGGetFreeGames', methods=['GET'])
def CMGetFreeGames():
    try:
        objectResult = callMethod.CMGetFreeGames()
        return objectResult
    except Exception:
        return jsonify(globalMessages.err500)


@app.route('/api/CGGetGiveaways', methods=['GET'])
def CMGetGiveaways():
    try:
        objectResult = callMethod.CMGetGiveaways()
        return objectResult
    except Exception:
        return jsonify(globalMessages.err500)


@app.route('/prueba',methods=['GET'])
def pruebaget():
    try:
        objectResult = callMethod.prueba()
        return jsonify(objectResult)
    except Exception:
        return {"Error":"No entro a prueba"}

if __name__ == '__main__':
    app.run(debug=True, port=9000, host="0.0.0.0", threaded=True)