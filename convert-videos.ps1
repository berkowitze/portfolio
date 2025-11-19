# Script to convert HEVC videos to H.264 for better iOS browser compatibility

$publicDir = "public"
$videoFiles = Get-ChildItem -Path $publicDir -Recurse -Include *.mp4

Write-Host "Found $($videoFiles.Count) video files. Checking codecs..." -ForegroundColor Cyan

$hevcVideos = @()

foreach ($video in $videoFiles) {
    Write-Host "Checking: $($video.FullName)" -ForegroundColor Gray
    
    # Check if video is HEVC encoded
    $codecInfo = & ffmpeg -i $video.FullName 2>&1 | Select-String "Stream #0:0.*: Video: hevc"
    
    if ($codecInfo) {
        Write-Host "  -> HEVC detected!" -ForegroundColor Yellow
        $hevcVideos += $video
    } else {
        Write-Host "  -> Already H.264 or other codec" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Found $($hevcVideos.Count) HEVC videos to convert" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

if ($hevcVideos.Count -eq 0) {
    Write-Host "No HEVC videos found. Exiting." -ForegroundColor Green
    exit 0
}

Write-Host ""
Write-Host "Videos to convert:"
foreach ($video in $hevcVideos) {
    Write-Host "  - $($video.FullName)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Starting conversion..." -ForegroundColor Cyan

$converted = 0
$failed = 0

foreach ($video in $hevcVideos) {
    $inputPath = $video.FullName
    $tempPath = $video.FullName + ".temp.mp4"
    
    Write-Host ""
    Write-Host "Converting: $($video.Name)" -ForegroundColor Cyan
    
    # Convert to H.264 with good quality settings
    # -c:v libx264: H.264 codec
    # -preset slow: Better compression
    # -crf 23: Quality (lower = better, 23 is good default)
    # -c:a copy: Copy audio without re-encoding
    # -movflags +faststart: Optimize for web streaming
    $ffmpegArgs = @(
        "-i", $inputPath,
        "-c:v", "libx264",
        "-preset", "slow",
        "-crf", "23",
        "-c:a", "copy",
        "-movflags", "+faststart",
        "-y",
        $tempPath
    )
    
    & ffmpeg @ffmpegArgs 2>&1 | Out-Null
    
    if ($LASTEXITCODE -eq 0) {
        # Replace original with converted file
        Move-Item -Path $tempPath -Destination $inputPath -Force
        Write-Host "  -> Success!" -ForegroundColor Green
        $converted++
    } else {
        Write-Host "  -> Failed!" -ForegroundColor Red
        if (Test-Path $tempPath) {
            Remove-Item $tempPath
        }
        $failed++
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Conversion complete!" -ForegroundColor Cyan
Write-Host "Converted: $converted" -ForegroundColor Green
Write-Host "Failed: $failed" -ForegroundColor $(if ($failed -gt 0) { "Red" } else { "Green" })
Write-Host "========================================" -ForegroundColor Cyan

