- Instalar el módulo npm:
npm install oracledb --save

- Descargar zips: `instantclient-basic-linux.x64-18.3.0.0.0dbru.zip`    
URL: https://github.com/bumpx/oracle-instantclient

- Crear directorio con librerías:  
    - unzip instantclient-basic-linux.x64-18.3.0.0.0dbru.zip
    - mkdir -p /opt/oracle
    - mv instantclient_18_3 /opt/oracle

- Crear dependendencias:  
    - sudo sh -c "echo /opt/oracle/instantclient_18_3 > /etc/ld.so.conf.d/oracle-instantclient.conf"
    - sudo ldconfig

- Instalar `libaio1` o `libaio` con `apt-get` o `yum`  
sudo apt-get install libaio1
