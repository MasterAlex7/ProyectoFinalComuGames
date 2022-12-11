from cmath import e
from hashlib import new
import sre_compile
from flask import Flask, jsonify, request, Response
import BackEnd.GlobalInfo.IOTKeys as globalKeys
import BackEnd.GlobalInfo.ResponseMessages as globalMessages
from pymongo import MongoClient
from bson.objectid import ObjectId
from datetime import datetime
import pytz

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





    