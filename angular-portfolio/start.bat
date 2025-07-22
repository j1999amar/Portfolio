@echo off
echo Installing Angular CLI globally...
npm install -g @angular/cli

echo Installing project dependencies...
npm install

echo Starting development server...
ng serve --open

pause
