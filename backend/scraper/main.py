import sys
from Record import Record
from utils import soupify, checkIfVinyl

my_url = 'https://www.sensorialdiscos.com.br/search_store?q='

args = sys.argv
args.pop(0)

search = "+".join(args)
my_url += search

page_soup = soupify(my_url)

containers = page_soup.findAll("li", {"class": "product"})

records = []

for container in containers:
    disc_url = 'https://www.sensorialdiscos.com.br' + container.a["href"]
    disc_soup = soupify(disc_url)

    if checkIfVinyl(disc_soup):
        name = disc_soup.find("div", {"id": "product_title"}).text
        parsed_name = name.split(" - ", 1)
        price = disc_soup.find("span", {"class": "price"}).text

        new_record = Record(parsed_name[0], parsed_name[1], price)
        records.append(new_record)