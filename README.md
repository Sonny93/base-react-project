# Base React Project

Base react project with express server.\
Webpack, React, and Express are included.

## Installation

```bash
git clone https://github.com/Sonny93/Base-React-Folder-Project.git
npm install
npm install -g pm2
```

## Dev

Watching files with webpack
```bash
npm run watch
```

Start server
```bash
pm2 start server.js --watch && clear && pm2 logs
```

## Production

```bash
npm run build
```

## License
[ISC](https://choosealicense.com/licenses/isc/)