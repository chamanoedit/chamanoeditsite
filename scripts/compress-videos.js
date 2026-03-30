/**
 * Script para comprimir vídeos MP4 (reduz 80-90% do tamanho)
 * Requer FFmpeg instalado: https://ffmpeg.org/download.html
 *
 * Uso: node scripts/compress-videos.js
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const readline = require('readline');

const VIDEOS_DIR = path.join(__dirname, '..', 'public', 'videos');
const TOTAL_VIDEOS = 13;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🎬 Compressor de Vídeos Showcase\n');
console.log('⚠️  ATENÇÃO: Este processo pode demorar vários minutos!\n');

// Verifica se FFmpeg está instalado
try {
  execSync('ffmpeg -version', { stdio: 'ignore' });
} catch (error) {
  console.error('❌ FFmpeg não encontrado!');
  console.error('📥 Instale em: https://ffmpeg.org/download.html');
  process.exit(1);
}

rl.question('Deseja continuar? (s/n): ', (answer) => {
  if (answer.toLowerCase() !== 's') {
    console.log('❌ Cancelado.');
    rl.close();
    process.exit(0);
  }

  rl.close();
  compressVideos();
});

function compressVideos() {
  console.log('\n🚀 Iniciando compressão...\n');

  let totalOriginal = 0;
  let totalCompressed = 0;

  for (let i = 1; i <= TOTAL_VIDEOS; i++) {
    const videoPath = path.join(VIDEOS_DIR, `showcase${i}.mp4`);
    const compressedPath = path.join(VIDEOS_DIR, `showcase${i}-compressed.mp4`);

    if (!fs.existsSync(videoPath)) {
      console.warn(`⚠️  Vídeo não encontrado: showcase${i}.mp4`);
      continue;
    }

    try {
      const originalSize = fs.statSync(videoPath).size;
      totalOriginal += originalSize;

      console.log(`📹 Comprimindo showcase${i}.mp4 (${(originalSize / 1024 / 1024).toFixed(2)} MB)...`);

      // Comprimir com H.264, CRF 28 (boa qualidade), 1080p, sem áudio
      execSync(
        `ffmpeg -i "${videoPath}" -vcodec libx264 -crf 28 -preset slow -vf scale=-2:1080 -an "${compressedPath}" -y`,
        { stdio: 'inherit' }
      );

      const compressedSize = fs.statSync(compressedPath).size;
      totalCompressed += compressedSize;

      const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);

      console.log(
        `✅ showcase${i}-compressed.mp4: ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(compressedSize / 1024 / 1024).toFixed(2)} MB (${savings}% menor)\n`
      );

    } catch (error) {
      console.error(`❌ Erro ao comprimir showcase${i}:`, error.message);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`📊 Tamanho original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📊 Tamanho comprimido: ${(totalCompressed / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Economia total: ${((1 - totalCompressed / totalOriginal) * 100).toFixed(1)}%`);
  console.log('='.repeat(60));

  console.log('\n📝 Próximos passos:');
  console.log('1. Teste os vídeos comprimidos para garantir a qualidade');
  console.log('2. Se estiver satisfeito, substitua os originais:');
  console.log('   - Delete showcase1.mp4, showcase2.mp4, etc.');
  console.log('   - Renomeie showcase1-compressed.mp4 para showcase1.mp4');
  console.log('3. Faça commit e deploy!');
}
