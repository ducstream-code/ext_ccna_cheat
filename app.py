import bs4
import flask
from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
from bs4 import BeautifulSoup
import urllib.parse

app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'


cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/foo', methods=['GET'])
def foo():
    try:
        param = request.args.get("q")
        query = "https://itexamanswers.net/questions-bank?qs="+urllib.parse.quote(param)
        print(query)
        r = requests.get(query)
        # print(r.text)
        soup = bs4.BeautifulSoup(r.text, 'html.parser')
        try:
            container = soup.find_all("div",{'class':'dwqa-questions-list'})[0]
        except Exception as e:
            return 'error'
        qLink = container.find_all("a")[0]['href']

        r = requests.get(qLink)
        soup = bs4.BeautifulSoup(r.text,'html.parser')
        container = soup.find_all("div", {'class': 'dwqa-question-content'})[0]
        answerList = container.find_all('ul')[0]
        answers = []
        for answer in answerList.find_all('span'):
            answers.append(answer.text)
        return answers
    except Exception as e:
        return 'error'



if __name__ == '__main__':
    app.run()
