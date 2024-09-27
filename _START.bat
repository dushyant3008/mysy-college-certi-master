@echo off

rem Run nginx in a separate process
start "nginx" "G:\mysy-college-certi-master\nginx-1.26.0\nginx.exe"

rem Navigate to your project directory
cd /d "G:\mysy-college-certi-master\mysy-college-certi-master"

rem Start your front-end server (if needed)
start cmd /k npm run start

rem Navigate to the server directory
cd /d "G:\mysy-college-certi-master\mysy-college-certi-master\server"

rem Activate the virtual environment
call.\myenv\Scripts\activate

rem Start Waitress servers on different ports
start cmd /k waitress-serve --host=160.160.19.13 --port=5001 main:app
start cmd /k waitress-serve --host=160.160.19.13 --port=5002 main:app
start cmd /k waitress-serve --host=160.160.19.13 --port=5003 main:app
start cmd /k waitress-serve --host=160.160.19.13 --port=5004 main:app
start cmd /k waitress-serve --host=160.160.19.13 --port=5005 main:app

rem Deactivate the virtual environment (optional)
deactivate