from pymongo import MongoClient
from credentials import username, password
from Record import Record

uri = "mongodb+srv://{}:{}@cluster0-3wrnb.mongodb.net/test?retryWrites=true&w=majority".format(username, password)
cluster = MongoClient(uri)
db = cluster["record-library"]
collection = db["records"]

def recordQuery(artist, album_title):
    existent_record = collection.find_one({"artist": artist, "title": album_title})
    return existent_record

def createRecord(new_record):
    collection.insert_one(new_record.__dict__)