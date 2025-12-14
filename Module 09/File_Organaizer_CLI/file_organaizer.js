import fs from 'fs';
import path from 'path';
import url from 'url';

// current path & 2 new path
const curr_path = url.fileURLToPath(import.meta.url);
const dir_path = path.dirname(curr_path);
const source_dir = path.join(dir_path, 'messey-files');
const organized_dir = path.join(dir_path, "organaized-files");


// files
const categories = {
    images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
    documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
    videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
    audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
    code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
    archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
    spreadsheets: [".xls", ".xlsx", ".csv"],
    others: [],
};

const testFiles = [
    "vacation.jpg",
    "report.pdf",
    "presentation.pptx",
    "music.mp3",
    "video.mp4",
    "script.js",
    "data.csv",
    "archive.zip",
    "photo.png",
    "notes.txt",
    "app.py",
    "movie.avi",
    "song.wav",
    "backup.tar.gz",
    "random.xyz",
    "nodejs.zip"
]

// Create source_dir

function initializeDirectories() {
    if (!fs.existsSync(source_dir)) {
        fs.mkdirSync(source_dir, { recursive: true });
        testFiles.forEach((data) => {
            fs.writeFileSync(path.join(source_dir, data), `data of ${data}`);
        });
    }
    console.log('messi directoried & files are created');

    // Create organaized folder
    if (!fs.existsSync(organized_dir)) {
        fs.mkdirSync(organized_dir, { recursive: true });
    }

    // Creating category wise folder in organaized folder
    const Keys = Object.keys(categories);
    Keys.forEach((cat) => {
        fs.mkdirSync(path.join(organized_dir, cat), { recursive: true });
    })
}

initializeDirectories();