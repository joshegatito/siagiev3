@echo off
set NODE_PATH=C:\laragon\bin\nodejs\node-v18
set PATH=%NODE_PATH%;%PATH%

echo Instalando dependencias...
npm install
echo.
echo Dependencias instaladas correctamente!
pause
