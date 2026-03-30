/**
 * Script Node.js para gerar thumbnails dos vídeos
 * Requer FFmpeg instalado: https://ffmpeg.org/download.html
 *
 * Uso: node scripts/generate-thumbnails.js
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const VIDEOS_DIR = path.join(__dirname, '..', 'public', 'videos');
const TOTAL_VIDEOS = 13;

console.log('🎬 Gerando thumbnails dos vídeos showcase...\n');

// Verifica se FFmpeg está instalado
try {
  execSync('ffmpeg -version', { stdio: 'ignore' });
} catch (error) {
  console.error('❌ FFmpeg não encontrado!');
  console.error('📥 Instale em: https://ffmpeg.org/download.html');
  process.exit(1);
}

let successCount = 0;
let errorCount = 0;

for (let i = 1; i <= TOTAL_VIDEOS; i++) {
  const videoPath = path.join(VIDEOS_DIR, `showcase${i}.mp4`);
  const thumbPath = path.join(VIDEOS_DIR, `showcase${i}-thumb.jpg`);

  // Verifica se o vídeo existe
  if (!fs.existsSync(videoPath)) {
    console.warn(`⚠️  Vídeo não encontrado: showcase${i}.mp4`);
    errorCount++;
    continue;
  }

  try {
    console.log(`🎨 Gerando thumbnail ${i}/${TOTAL_VIDEOS}...`);

    // Gera thumbnail no segundo 0.5, qualidade alta
    execSync(
      `ffmpeg -i "${videoPath}" -ss 00:00:00.5 -vframes 1 -q:v 2 "${thumbPath}" -y`,
      { stdio: 'ignore' }
    );

    const stats = fs.statSync(thumbPath);
    const sizeKB = (stats.size / 1024).toFixed(2);

    console.log(`✅ showcase${i}-thumb.jpg criado (${sizeKB} KB)`);
    successCount++;

  } catch (error) {
    console.error(`❌ Erro ao processar showcase${i}.mp4:`, error.message);
    errorCount++;
  }
}

console.log('\n' + '='.repeat(50));
console.log(`🎉 Concluído!`);
console.log(`✅ Sucesso: ${successCount} thumbnails`);
if (errorCount > 0) {
  console.log(`❌ Erros: ${errorCount}`);
}
console.log('='.repeat(50));

// Gera também thumbnails WebP (opcional, mais leve)
if (successCount > 0) {
  console.log('\n💡 Dica: Para thumbnails ainda menores, converta para WebP:');
  console.log('   node scripts/convert-to-webp.js');
}
