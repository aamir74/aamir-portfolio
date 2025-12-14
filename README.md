# DeveloperFolio

A clean, customizable, and responsive React portfolio template for software developers.

## Features

- **Data-Driven**: Configure everything through `src/portfolio.js` - no need to edit components
- **Dark Mode**: Built-in theme switcher with system preference detection
- **GitHub Integration**: Auto-fetch pinned repositories and profile data
- **Blog Integration**: Connect with Medium to display your latest posts
- **SEO Optimized**: Customizable meta tags and Open Graph support
- **Responsive Design**: Mobile-first approach with smooth animations
- **Easy Deployment**: GitHub Actions workflow included for automated deployment

## Quick Start

**Prerequisites**: Node.js v10.16.0+, npm 6.9.0+, Git 2.17.1+

```bash
# Clone repository
git clone https://github.com/saadpasta/developerFolio.git
cd developerFolio

# Setup environment
cp env.example .env

# Install and run
npm install
npm start
```

Visit `http://localhost:3000` to see your portfolio.


## Configuration

### 1. Edit Portfolio Content

All content is configured in `src/portfolio.js`:

```javascript
const greeting = {
  title: "Hi, I'm Your Name",
  subTitle: "A passionate Full Stack Developer",
  resumeLink: "path/to/your/resume.pdf"
};

const socialMediaLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourprofile/",
  gmail: "your.email@gmail.com"
};

// ... configure skills, education, work experience, projects, etc.
```

### 2. Setup Environment Variables

Create `.env` in the root directory:

```env
# GitHub Integration (optional)
REACT_APP_GITHUB_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=your_github_username
USE_GITHUB_DATA=true

# Medium Integration (optional)
MEDIUM_USERNAME=your_medium_username
```

**Note**: Generate a GitHub token [here](https://github.com/settings/tokens) (no scopes needed for public data).

### 3. Customize Styling

- **Global Colors**: Edit `src/_globalColor.scss`
- **SEO & Meta Tags**: Edit `public/index.html`
- **Resume**: Replace `src/containers/greeting/resume.pdf`
- **Animations**: Replace Lottie JSON files in `src/assets/lottie/`

## Deployment

### GitHub Pages (Recommended)

The project includes a GitHub Actions workflow for automated deployment:

1. Update `homepage` in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

2. Push to master branch - GitHub Actions will automatically deploy
3. The workflow runs weekly to refresh GitHub data

**Manual deployment**: `npm run deploy`

### Other Platforms

- **Netlify**: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/saadpasta/developerFolio)
- **Docker**:
  ```bash
  docker build -t developerfolio:latest .
  docker run -t -p 3000:3000 developerfolio:latest
  ```


## Tech Stack

- **Frontend**: React 16.x with Hooks
- **Styling**: SASS/SCSS
- **Animations**: Lottie, react-reveal
- **Data Fetching**: GraphQL (GitHub API), Apollo Client
- **Deployment**: GitHub Pages, gh-pages

## Available Scripts

```bash
npm start          # Start development server (port 3000)
npm run build      # Create production build
npm test           # Run tests
npm run format     # Format code with Prettier
npm run deploy     # Deploy to GitHub Pages
```

## Contributing

Contributions are welcome! Check out [Issues](https://github.com/saadpasta/developerFolio/issues) or submit a [Pull Request](https://github.com/saadpasta/developerFolio/pulls).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---