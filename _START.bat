@echo off

cd /d "%~dp0"

start cmd /k "npm run start"

cd "server"

start cmd /k "python main.py"
