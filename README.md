# Gokul P - Portfolio Website

A modern, responsive portfolio website built with Angular 18+.


## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GokulDecodes/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── hero/
│   │   │   ├── services/
│   │   │   ├── about/
│   │   │   ├── skills/
│   │   │   ├── portfolio/
│   │   │   ├── contact/
│   │   │   └── footer/
│   │   └── app.component.ts
│   ├── styles.css
│   └── index.html
├── public/
│   ├── profile1.png
│   ├── profile2.png
│   └── portfolio/
└── package.json
```

## ✨ Features

- **Responsive Design** - Works on all devices
- **Modern UI/UX** - Clean, professional design
- **Contact Form** - EmailJS integration for sending messages
- **Skill Categories** - Organized technical skills display
- **Portfolio Gallery** - Project showcase with hover effects
- **Smooth Scrolling** - Navigation between sections

## 🛠️ Technologies

- Angular 18+
- TypeScript
- CSS3 (Flexbox, Grid, CSS Variables)
- EmailJS

## 📧 Contact Form Setup

The contact form uses EmailJS. To configure:

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Add your email service (Gmail)
3. Create an email template
4. Update the credentials in `src/app/components/contact/contact.component.ts`:
   ```typescript
   private serviceId = 'your_service_id';
   private templateId = 'your_template_id';
   private publicKey = 'your_public_key';
   ```

## 📦 Build

```bash
ng build --configuration production
```

Output will be in `dist/portfolio/browser/`

## 📄 License

MIT License

## 👨‍💻 Author

**Gokul Partha Sarathy**
- LinkedIn: [gokul-partha-sarathy](https://www.linkedin.com/in/gokul-partha-sarathy-a056392a1/)
- GitHub: [GokulDecodes](https://github.com/GokulDecodes)
