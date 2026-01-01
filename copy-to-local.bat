@echo off
echo Copying extensions to local Flowlence Desktop folder...

set "TARGET1=%APPDATA%\Flowlence Desktop\Data\external-resources"
set "TARGET2=%APPDATA%\Electron\Data\external-resources"

echo.
echo Copying to Flowlence Desktop cache...
if not exist "%TARGET1%" mkdir "%TARGET1%"
if not exist "%TARGET1%\extensions" mkdir "%TARGET1%\extensions"
xcopy /E /Y /I "extensions" "%TARGET1%\extensions"
copy /Y "config.json" "%TARGET1%\config.json"

echo.
echo Copying to Electron cache (dev mode)...
if not exist "%TARGET2%" mkdir "%TARGET2%"
if not exist "%TARGET2%\extensions" mkdir "%TARGET2%\extensions"
xcopy /E /Y /I "extensions" "%TARGET2%\extensions"
copy /Y "config.json" "%TARGET2%\config.json"

echo.
echo Done! Restart Flowlence Desktop to see changes.
pause
