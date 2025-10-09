const fs = require('fs');
const path = require('path');

const processKnowledgeBase = (kbDir, outputFile) => {
  const kbPath = path.resolve(__dirname, kbDir);
  const outputPath = path.resolve(__dirname, outputFile);
  const knowledgeBase = [];

  if (fs.existsSync(kbPath)) {
    fs.readdirSync(kbPath).forEach(file => {
      if (path.extname(file) === '.md' || path.extname(file) === '.txt') {
        const content = fs.readFileSync(path.join(kbPath, file), 'utf-8');
        const chunks = content.split('\n\n').filter(chunk => chunk.trim() !== '');
        knowledgeBase.push({
          source: file,
          chunks: chunks,
        });
      }
    });
  }

  fs.writeFileSync(outputPath, JSON.stringify(knowledgeBase, null, 2));
  console.log(`Knowledge base prepared successfully at ${outputFile}`);
};

// Process the default knowledge base
processKnowledgeBase('../src/knowledgebase', '../public/kb.json');

// Process the service provider knowledge base
processKnowledgeBase('../src/knowledgebase-sp', '../public/kb-sp.json');