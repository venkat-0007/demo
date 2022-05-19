FROM python:3.8.10
WORKDIR /flask-demo
ADD . /flask-demo/
RUN pip install -r requirements.txt
CMD [ "python", "app.py" ]