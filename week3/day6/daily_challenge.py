import re
import string


class Text:
    def __init__(self, text):
        self.text = text

    def frequency(self, word):
        result = self.text.lower().count(word.lower())
        if result:
            return result
        return None

    def most_common_word(self):
        words = self.text.lower().split()
        most_common = words[0]
        for word in words:
            if self.frequency(word) > self.frequency(most_common):
                most_common = word
        return most_common

    def uniques_words(self):
        return list(set(self.text.split()))

    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r') as f:
            return cls(f.read())


class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)

    def without_punctuation(self):
        return self.text.translate(str.maketrans('', '', string.punctuation))

    def without_stop_words(self):
        with open("NLTK's list of english stopwords", 'r') as f:
            stop_words = f.read().split()

        stop_words_upper = [word.upper() for word in stop_words]
        stop_words_capitalize = [word.capitalize() for word in stop_words]
        stop_words.extend(stop_words_upper)
        stop_words.extend(stop_words_capitalize)

        pattern = re.compile(r'\b(' + r'|'.join(stop_words) + r')\b\s*')
        return pattern.sub('', self.text)

    def without_special_characters(self):
        return ''.join([e for e in self.text if e.isalnum()])


text = Text.from_file('the_stranger.txt')

print(text.most_common_word())
print(text.uniques_words())
print(text.frequency('the'))

text = TextModification.from_file('the_stranger.txt')
print(text.without_punctuation())
print(text.without_special_characters())
print(text.without_stop_words())
