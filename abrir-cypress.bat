@echo off
echo Abrindo Cypress...
echo.
cd /d "F:\estudos-cypress-pc"
echo Diretorio: %CD%
echo.
call npm run cy:open
if errorlevel 1 (
    echo.
    echo ERRO: Nao foi possivel abrir o Cypress!
    echo Verifique se o Node.js e npm estao instalados.
    echo.
    pause
)
