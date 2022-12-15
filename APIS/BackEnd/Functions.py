from flask import Flask, jsonify, request, Response,json
import requests
import BackEnd.GlobalInfo.IOTKeys as globalKeys
import BackEnd.GlobalInfo.ResponseMessages as globalMessages
from bson import json_util
from pymongo import MongoClient

dbConnLocal = None

if globalKeys.dbconn == None:
    mongoConnect = MongoClient(globalKeys.strConnection)
    globalKeys.dbconn = mongoConnect["ComuGamesDB"]
    dbConnLocal = globalKeys.dbconn
    
###########################################################################
# -- AUTHOR : Alex Ri
# -- Date : 06-12-2022
# -- Project : Proyecto final ComuGames Redes
# -- Description : Function to Login

def CMLogin(strUsername, strPassword):
    try:
        if str(strUsername) == '' or str(strPassword) == '':
            return globalMessages.err203
        objFind = dbConnLocal.clUsers.find_one({'strUsername':str(strUsername)})
        if objFind:
            if objFind['strPassword'] != str(strPassword):
                return globalMessages.err203
            else:
                objResponse = globalMessages.succ200.copy()
                return objResponse
        else:
            return globalMessages.err550

    except Exception as e:
        raise e
        return globalMessages.err500

###########################################################################
# -- AUTHOR : Alex Ri
# -- Date : 06-12-2022
# -- Project : Proyecto final ComuGames Redes
# -- Description : Function to Register

def CMRegister(strUsername, strPassword):
    try:
        jsquery={
            'strUsername': strUsername,
            'strPassword': strPassword
        }
        dbConnLocal.clUsers.insert_one(jsquery)
        objResponse = globalMessages.succ200.copy()
        return objResponse

    except Exception as e:
        raise e
        return globalMessages.err500

def prueba():
    jsquery={
            'strTPubli': "strTPubli",
            'strTitulo': "strTitulo",
            'strContenido': "strContenido",
            'strUser': "xdxdxd",
            'strFechaPubli': "hola"
        }
    return jsquery

def CMNuevaPubli(strTPubli, strTitulo, strContenido):
    try:
        jsquery={
            'strTPubli': strTPubli,
            'strTitulo': strTitulo,
            'strContenido': strContenido
        }
        id=dbConnLocal.clPublicaciones.insert_one(jsquery)
        Response = {
            'id': str(id.inserted_id)
        }
        return Response
    except Exception as e:
        raise e
        return globalMessages.err500

def CMNuevoComentario(strContenido, strUser, idPubli):
    try:
        jsquery={
            'strContenido': strContenido,
            'strUser': strUser,
            'idPubli': idPubli
        }
        id=dbConnLocal.clComentarios.insert_one(jsquery)
        Response = {
            'id': str(id.inserted_id)
        }
        return Response
    except Exception as e:
        raise e
        return globalMessages.err500

def CMGetPubli():
    try:
        jsnQuery = {}
        data = dbConnLocal.clPublicaciones.find(jsnQuery)
        response = json_util.dumps(data)
        my_data_file = open('nfs/publicaciones.txt', 'a')
        my_data_file.write(response)
        return Response(response, mimetype="application/json")
    except Exception as e:
        raise e
        return globalMessages.err500

def CMGetFreeGames():
    try:
        url = "https://free-to-play-games-database.p.rapidapi.com/api/games"

        headers = {
            "X-RapidAPI-Key": "19c4916fd2mshdaaf504c2722d70p16ca4ajsn7a3a8cfcd8a7",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
        }
        response = requests.request("GET", url, headers=headers)
        res=json_util.dumps(response)
        my_data_file = open('nfs/juegosgratis.txt', 'a')
        my_data_file.write(res)
        return Response(response, mimetype="application/json")
    except Exception as e:
        raise e
        return globalMessages.err500

def CMGetGiveaways():
    try:
        url = "https://gamerpower.p.rapidapi.com/api/giveaway"

        querystring = {"id":"250"}

        headers = {
            "X-RapidAPI-Key": "19c4916fd2mshdaaf504c2722d70p16ca4ajsn7a3a8cfcd8a7",
            "X-RapidAPI-Host": "gamerpower.p.rapidapi.com"
        }

        response = requests.request("GET", url, headers=headers, params=querystring)
        res=json_util.dumps(response)
        my_data_file = open('nfs/regalos.txt', 'a')
        my_data_file.write(res)
        return Response(response, mimetype="application/json")
    except Exception as e:
        raise e
        return globalMessages.err500



    