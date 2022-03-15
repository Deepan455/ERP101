FROM python:3.9
ENV PYTHONBUFFERED 1
WORKDIR /ERP
RUN pip install -r ERP/requirements.txt
COPY . /ERP

CMD python manage.py runserver 0.0.0.0:8000