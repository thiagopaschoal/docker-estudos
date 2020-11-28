FROM ubuntu:18.04
LABEL maintaner="Thiago Sakurai Paschoal"

# lembre-se que cada vez que vc executa o comando RUN, uma camada é criada e adicionada na imagem
RUN apt-get update \
    && apt-get install apache2 -y \ 
    && apt-get install vim -y \ 
    && apt-get install apache2-utils -y

# Expondo a porta 80 no container
EXPOSE 80

CMD [ "apache2ctl", "-D", "FOREGROUND" ]