import sys
from Record import Record
from utils import soupify, checkIfVinyl

my_url = 'https://www.sensorialdiscos.com.br/search_store?q='
main_url = 'https://www.sensorialdiscos.com.br'

args = sys.argv
args.pop(0)

search = "+".join(args)
my_url += search

page_soup = soupify(my_url)

containers = page_soup.findAll("li", {"class": "product"})

records = []

for container in containers:
    disc_url = main_url + container.a["href"]
    disc_soup = soupify(disc_url)

    if checkIfVinyl(disc_soup):
        name = disc_soup.find("div", {"id": "product_title"}).text
        parsed_name = name.split(" - ", 1)
        price = disc_soup.find("span", {"class": "price"}).text
        cover = main_url + disc_soup.find("img", {"alt": name})["src"]

        new_record = Record(parsed_name[0], parsed_name[1], price, cover)
        records.append(new_record)