param(
    [switch]$NoWindow = $true
)

$BackendRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$PythonExe = Join-Path $BackendRoot '.venv/Scripts/python.exe'
$LogDir = Join-Path $BackendRoot 'logs'
New-Item -ItemType Directory -Path $LogDir -Force | Out-Null
$StdOut = Join-Path $LogDir 'uvicorn.out.log'
$StdErr = Join-Path $LogDir 'uvicorn.err.log'

if (-not (Test-Path $PythonExe)) {
    throw "Python virtual environment was not found at $PythonExe"
}

$listener = Get-NetTCPConnection -LocalPort 8000 -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1
if ($listener) {
    Write-Host "Backend already listening on port 8000 (PID $($listener.OwningProcess))."
    exit 0
}

$arguments = @('-m', 'uvicorn', 'app.main:app', '--host', '0.0.0.0', '--port', '8000')
$process = Start-Process -FilePath $PythonExe -ArgumentList $arguments -WorkingDirectory $BackendRoot -RedirectStandardOutput $StdOut -RedirectStandardError $StdErr -PassThru -WindowStyle Hidden
Start-Sleep -Seconds 3

try {
    $response = Invoke-WebRequest -Uri 'http://127.0.0.1:8000/health' -UseBasicParsing -TimeoutSec 5
    Write-Host "Backend started successfully."
    Write-Host $response.Content
}
catch {
    Write-Warning "Backend did not respond on http://127.0.0.1:8000/health within 5 seconds."
    if (Test-Path $StdErr) {
        Write-Host "---- stderr ----"
        Get-Content $StdErr -ErrorAction SilentlyContinue
    }
    throw
}
