

const fs = require('fs');
const path = require('path');

const kbPath = path.resolve(__dirname, '../src/knowledgebase');
const outputPath = path.resolve(__dirname, '../public/kb.json');

const knowledgeBase = [];

// Read all files in the directory
fs.readdirSync(kbPath).forEach(file => {
  if (path.extname(file) === '.md') {
    const content = fs.readFileSync(path.join(kbPath, file), 'utf-8');
    
    // Simple chunking (you can get more sophisticated here)
    const chunks = content.split('\n\n').filter(chunk => chunk.trim() !== '');

    knowledgeBase.push({
      source: file,
      chunks: chunks,
    });
  }
});

fs.writeFileSync(outputPath, JSON.stringify(knowledgeBase, null, 2));

console.log('Knowledge base prepared successfully at public/kb.json');

