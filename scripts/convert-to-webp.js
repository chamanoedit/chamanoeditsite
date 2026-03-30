/**
 * Script para converter thumbnails JPG para WebP (90% menor)
 * Requer FFmpeg instalado: https://ffmpeg.org/download.html
 *
 * Uso: node scripts/convert-to-webp.js
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const VIDEOS_DIR = path.join(__dirname, '..', 'public', 'videos');
const TOTAL_VIDEOS = 13;

console.log('🖼️  Convertendo thumbnails para WebP...\n');

// Verifica se FFmpeg está instalado
try {
  execSync('ffmpeg -version', { stdio: 'ignore' });
} catch (error) {
  console.error('❌ FFmpeg não encontrado!');
  console.error('📥 Instale em: https://ffmpeg.org/download.html');
  process.exit(1);
}

let totalSavings = 0;

for (let i = 1; i <= TOTAL_VIDEOS; i++) {
  const jpgPath = path.join(VIDEOS_DIR, `showcase${i}-thumb.jpg`);
  const webpPath = path.join(VIDEOS_DIR, `showcase${i}-thumb.webp`);

  if (!fs.existsSync(jpgPath)) {
    console.warn(`⚠️  JPG não encontrado: showcase${i}-thumb.jpg`);
    continue;
  }

  try {
    const jpgSize = fs.statSync(jpgPath).size;

    // Converte para WebP com qualidade 85 (quase imperceptível)
    execSync(
      `ffmpeg -i "${jpgPath}" -q:v 85 "${webpPath}" -y`,
      { stdio: 'ignore' }
    );

    const webpSize = fs.statSync(webpPath).size;
    const savings = ((1 - webpSize / jpgSize) * 100).toFixed(1);
    totalSavings += (jpgSize - webpSize);

    console.log(
      `✅ showcase${i}-thumb.webp: ${(jpgSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (${savings}% menor)`
    );

  } catch (error) {
    console.error(`❌ Erro ao converter showcase${i}:`, error.message);
  }
}

console.log('\n' + '='.repeat(50));
console.log(`💾 Total economizado: ${(totalSavings / 1024 / 1024).toFixed(2)} MB`);
console.log('='.repeat(50));

console.log('\n📝 Agora atualize o código em showcase-section.tsx:');
console.log('   thumbnail: "/showcase1-thumb.webp"');
console.log('   (troque .jpg por .webp em todos os vídeos)');
