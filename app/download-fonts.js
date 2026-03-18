const fs = require('fs');
const https = require('https');
const path = require('path');

const fontsDir = path.join(__dirname, 'public', 'fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  // Orbitron Regular
  await download('https://fonts.gstatic.com/s/orbitron/v29/yq5R-KqwiJI2OoGnDF21Lw.woff', path.join(fontsDir, 'orbitron-latin-700-normal.woff'));
  // Roboto Mono Regular
  await download('https://fonts.gstatic.com/s/robotomono/v22/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW4.woff2', path.join(fontsDir, 'roboto-mono-latin-400-normal.woff'));
  console.log('Fonts downloaded');
}

main();
