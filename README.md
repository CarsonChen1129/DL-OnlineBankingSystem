# DL-OnlineBankingSystem
Mock Devonshire Lending LLC Online Banking System

# Install and configure MySQL

1.    Visit https://dev.mysql.com/downloads/mysql/ and download the latest version of MySQL based on your operating system.
2.    Once the installation of MySQL is done, open a terminal (on Windows’ machine, use cmd)
3.    Type “mysql –u root –p”
a.    Create the anonymous account and the “dlobs” database
•    Create user ‘’@’localhost’ identified by password ‘’;
•    Grant all privileges on *.* to ‘’@’localhost’;
•    Create database dlobs;
•    Quit;

Download the zipped package from Team 8 and uncompressed the package. You will get two directories: “DL-OBS” and “DL-OBS-Server”

# DL-OBS
1.    Visit https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm and download the latest version of node.js and npm.
2.    In the level of package.json, type “npm install” in the terminal.
3.    Npm will install all required libraries
4.    Then type “ng serve –open” to open the web app.

# DL-OBS-Server
1.    Visit https://www.python.org/ftp/python/2.7.14 to download and install python based on your operating system
2.    Visit https://pip.pypa.io/en/stable/ and install the latest version of pip.
3.    In the level of requirements.txt, run “pip install virtualenv”
4.    Then run “virtualenv dlobs”
5.    Source dlobs/bin/activate
6.    Then type “pip install –r requirements.txt”
7.    Pip will install all required libraries
8.    In order to initialize the system with some data, please run “python manage.py makemigrations” and then “python manage.py migrate”
9.    Then type “python manage.py runserver” to start the server

