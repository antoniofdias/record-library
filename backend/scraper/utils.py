from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
from decimal import Decimal
import wikipedia

def soupify(my_url):
    uClient = uReq(my_url)
    page_html = uClient.read()
    uClient.close()
    page_soup = soup(page_html, "html.parser")
    return page_soup

def checkIfVinyl(disc_soup):
    text = disc_soup.find("div", {"class": "product_description"}).text
    return "Formato: Vinil - LP" in text

def getDescription(artist, album_title):
    description = wikipedia.summary(album_title + ' ' + artist)
    description = description if artist in description else "Description not found"
    return description

def parsePrice(price_as_string):
    price = price_as_string[4:].replace(',', '.')
    return price