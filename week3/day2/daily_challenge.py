class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items
        self.page_size = int(page_size)

        self.pages = []
        if self.items is not None:
            for i in range(len(self.items) // self.page_size):
                self.pages.append(self.items[i * self.page_size:(i + 1) * self.page_size])
            self.pages.append(self.items[-(len(self.items) % self.page_size):])

        self.current_page = 1
        self.total_pages = len(self.pages)

    def get_visible_items(self):
        print(self.pages[self.current_page - 1])

    def prev_page(self):
        if self.current_page > 1:
            self.current_page -= 1
        return self

    def next_page(self):
        if self.current_page < self.total_pages:
            self.current_page += 1
        return self

    def first_page(self):
        self.current_page = 1
        return self

    def last_page(self):
        self.current_page = self.total_pages
        return self

    def go_to_page(self, page_num):
        if 0 < page_num < len(self.pages):
            self.current_page = int(page_num)
        elif page_num > self.total_pages:
            self.current_page = self.total_pages
        else:
            self.current_page = 1
        return self


alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

p.get_visible_items()
# ["a", "b", "c", "d"]

p.next_page()

p.get_visible_items()
# ["e", "f", "g", "h"]

p.last_page()

p.get_visible_items()
# ["y", "z"]
