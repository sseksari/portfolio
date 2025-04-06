const https = require('https');
const fs = require('fs');
const path = require('path');

const illustrations = {
    // Recipe illustrations
    'smoothie-illustration.jpg': 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=800&q=80',
    'pasta-illustration.jpg': 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&q=80',
    'tofu-bowl-illustration.jpg': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    
    // Travel illustrations
    'nyc-illustration.jpg': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    'yosemite-illustration.jpg': 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80',
    'zion-illustration.jpg': 'https://images.unsplash.com/photo-1509316787929-025f5b846b35?w=800&q=80',
    'phuket-illustration.jpg': 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80'
};

const illustrationsDir = path.join(__dirname, '../public/illustrations');

// Create illustrations directory if it doesn't exist
if (!fs.existsSync(illustrationsDir)) {
    fs.mkdirSync(illustrationsDir, { recursive: true });
}

// Download each illustration
Object.entries(illustrations).forEach(([filename, url]) => {
    const filepath = path.join(illustrationsDir, filename);
    
    https.get(url, (response) => {
        response.pipe(fs.createWriteStream(filepath));
        console.log(`Downloaded ${filename}`);
    }).on('error', (err) => {
        console.error(`Error downloading ${filename}:`, err.message);
    });
}); 