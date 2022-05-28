FROM python:3.8-slim-buster
WORKDIR /flask-demo
ADD . /flask-demo/
RUN pip install -r requirements.txt
CMD [ "python", "app.py" ]
#hello git update
