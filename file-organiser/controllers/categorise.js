const EXT_TO_CATEGORY = {
  // Docs
  '.pdf': 'docs', '.txt': 'docs', '.doc': 'docs', '.docx': 'docs', '.md': 'docs',
  // Images
  '.jpg': 'images', '.jpeg': 'images', '.png': 'images', '.gif': 'images', '.svg': 'images',
  // Videos
  '.mp4': 'videos', '.mov': 'videos', '.mkv': 'videos',
  // Audio
  '.mp3': 'audio', '.wav': 'audio'
  // others => 'others'
};

const path = require('path');
function categorize(filename) {
  const ext = path.extname(filename || '').toLowerCase();
  if (!ext) return 'others';
  return EXT_TO_CATEGORY[ext] || 'others';
}

module.exports = categorize;