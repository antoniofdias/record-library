class Record:
    def __init__(self, artist, title, price, cover, description, quantity):
        self.artist = artist
        self.title = title
        self.price = price
        self.cover = cover
        self.description = description
        self.quantity = quantity
        self._v = 0