@echo off
cd /d "%~dp0"
git add -A
git status
set /p msg="Mensagem do commit: "
git commit -m "%msg%"
git push origin main
echo.
echo Push concluido!
pause
