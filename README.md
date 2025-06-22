# 🔗 My Blockchain

A complete blockchain implementation with a beautiful web interface built with TypeScript, Express, and modern web technologies.

## 🚀 Features

- **Complete Blockchain Implementation** - SHA256 hashing, block linking, validation
- **Beautiful Web Interface** - Modern, responsive design with real-time updates
- **RESTful API** - Full API for blockchain operations
- **Real-time Statistics** - Live blockchain health monitoring
- **Interactive Testing** - Built-in test functions and validation
- **Cross-platform** - Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Backend**: TypeScript, Express.js, Node.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Cryptography**: CryptoJS (SHA256)
- **Deployment**: Vercel (serverless)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/MyBlockchain.git
   cd MyBlockchain
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your blockchain will be live!

### Manual Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blockchain` | Get entire blockchain |
| GET | `/api/latest-block` | Get most recent block |
| POST | `/api/add-block` | Add new block |
| GET | `/api/validate-chain` | Validate blockchain |
| POST | `/api/run-tests` | Run comprehensive tests |
| GET | `/api/test-genesis` | Test genesis block |
| GET | `/api/test-validation` | Test block validation |
| POST | `/api/clear-blockchain` | Reset to genesis block |
| GET | `/api/health` | Health check |

## 🎯 Usage

### Web Interface
1. **Add Blocks** - Enter data and click "Add Block"
2. **View Blockchain** - See all blocks with details
3. **Validate Chain** - Check blockchain integrity
4. **Run Tests** - Execute comprehensive tests
5. **Monitor Stats** - Real-time blockchain statistics

### API Usage
```javascript
// Add a new block
fetch('/api/add-block', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ data: 'Hello Blockchain!' })
});

// Get blockchain
fetch('/api/blockchain')
  .then(response => response.json())
  .then(data => console.log(data.blockchain));
```

## 🏗️ Architecture

### Core Components
- **Block Class** - Individual blockchain blocks
- **Blockchain Functions** - Core blockchain operations
- **Express Server** - RESTful API endpoints
- **Web Interface** - User-friendly frontend

### Blockchain Features
- ✅ **SHA256 Hashing** - Cryptographic block identification
- ✅ **Chain Linking** - Each block references the previous
- ✅ **Validation** - Automatic integrity checking
- ✅ **Immutable** - Tamper-resistant data structure

## 🧪 Testing

Run the comprehensive test suite:
```bash
npm test
```

Or use the web interface to run individual tests.

## 📊 Project Structure

```
MyBlockchain/
├── src/
│   ├── blockchain.ts    # Core blockchain implementation
│   ├── server.ts        # Express server (local development)
│   └── test.ts          # Test suite
├── api/
│   └── index.ts         # Vercel serverless function
├── public/
│   └── index.html       # Web interface
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vercel.json          # Vercel deployment config
└── README.md           # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure you're using Node.js 14+ and npm 6+
4. Open an issue on GitHub

## 🎉 Acknowledgments

- Built with modern web technologies
- Inspired by blockchain fundamentals
- Designed for educational purposes

---

**Happy Blockchaining! 🚀**
