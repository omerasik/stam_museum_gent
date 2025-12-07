[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/uqvlEq33)

# STAM Stadsmuseum Gent Website

Een moderne, volledig responsive website voor het STAM Stadsmuseum Gent, ontwikkeld met HTML5, CSS3 en JavaScript.

## 🔗 Live Demo

**GitHub Pages:** [https://omerasik.github.io/stam_museum_gent](https://omerasik.github.io/stam_museum_gent)

---

## 📋 Project Overzicht

Dit project is een herontwerp van de STAM website (https://stamgent.be) zoals aangegeven in de opdracht. De website is volledig responsive gebouwd en werkt perfect op desktop, tablet en mobiele apparaten.

### 🎯 Gerealiseerde Pagina's

- ✅ **index.html** - Homepage met agenda en actuele tentoonstellingen
- ✅ **history.html** - Historiek met interactieve tijdlijn navigatie
- ✅ **visit.html** - Bezoek informatie (openingsuren, prijzen, locatie)
- ✅ **about.html** - Over het STAM met uitklapbare secties

---

## 🛠 Technologieën & Features

### HTML5
- ✅ Semantische HTML structuur
- ✅ Toegankelijke markup
- ✅ SEO meta tags (noindex, nofollow)
- ✅ Optimized images

### CSS3
- ✅ Volledig responsive design (mobiel, tablet, desktop)
- ✅ Artevelde reset.css gebruikt
- ✅ Custom CSS variabelen voor kleuren en fonts
- ✅ Flexbox & Grid layouts
- ✅ Media queries voor 3 breakpoints (1024px, 768px, 480px)
- ✅ Smooth animations en transitions
- ✅ Browser-accessible font sizes

### JavaScript (ES6+)
- ✅ Hamburger menu functionaliteit
- ✅ Smooth scroll navigatie
- ✅ Expandable sections (about pagina)
- ✅ Click outside to close menu
- ✅ Interactive event listeners
- ✅ IIFE pattern voor naamconflicten

---

## 📱 Responsive Design

### Breakpoints
```css
/* Desktop: > 1024px */
- Volledige navigatie
- Multi-column layouts
- Grote hero images

/* Tablet: 768px - 1024px */
- Hamburger menu
- 2-column card layouts
- Geoptimaliseerde spacing

/* Mobile: < 768px */
- Mobile-first approach
- Single column layouts
- Touch-friendly buttons
- Fixed bottom navigation
```

### Mobiele Optimalisaties
- 🍔 Werkende hamburger menu op alle pagina's
- 📱 Touch-friendly interface
- ⚡ Optimale laadtijden
- 🎨 Consistent design systeem
- ♿ Toegankelijk voor alle gebruikers

---

## 🎨 Design Systeem

### Kleuren
```css
--brand-green: hsl(158, 100%, 27%)
--brand-red: hsl(19, 100%, 50%)
--brand-yellow: hsl(59, 69%, 67%)
--neutrals-white: hsl(0, 0%, 100%)
--neutrals-black: hsl(0, 0%, 16%)
```

### Typography
- **Headings**: Albert Sans (Google Fonts)
- **Body**: Roboto Regular/Medium (Google Fonts)
- **Responsive sizes**: 19px - 60px

---

## 📁 Project Structuur

```
stam_museum/
├── index.html              # Homepage (Agenda)
├── history.html            # Historiek pagina
├── visit.html              # Bezoek informatie
├── about.html              # Over het STAM
├── robots.txt              # SEO configuratie
├── README.md               # Deze file
├── static/
│   ├── css/
│   │   ├── reset.css       # Artevelde CSS reset
│   │   ├── main.css        # Hoofd styling
│   │   └── mediaandhamburger.css  # Responsive & menu
│   ├── js/
│   │   └── main.js         # JavaScript functionaliteit
│   ├── images/             # Alle afbeeldingen & icons
│   └── fonts/              # Google Fonts (Albert Sans, Roboto)
├── events/
│   └── he-who-keeps-remains.html
└── docs/
    └── screencast.mp4      # Demo video
```

---

## 🚀 Wat is er Gemaakt?

### ✅ Voldaan aan Alle Eisen

#### HTML
- ✅ Eigen semantische structuur (niet gebaseerd op live site)
- ✅ Alle images lokaal opgeslagen en geoptimaliseerd
- ✅ `<meta name="robots" content="noindex,nofollow">` in elke HTML file
- ✅ Toegankelijke markup met ARIA labels
- ✅ Semantische HTML5 elementen (header, nav, main, section, footer)

#### CSS
- ✅ Alle pagina's volledig responsive
- ✅ Artevelde reset.css gebruikt
- ✅ Browser-accessibility font sizes (em/rem units)
- ✅ 3 breakpoints (1024px, 768px, 480px)
- ✅ Mobile-first approach
- ✅ Flexbox en CSS Grid layouts
- ✅ Custom CSS variabelen voor consistentie

#### JavaScript
- ✅ Hamburger menu volledig werkend
- ✅ Click outside to close functionaliteit
- ✅ Smooth scroll navigatie
- ✅ Expandable sections (about pagina)
- ✅ Event listeners voor interactiviteit
- ✅ Clean, onderhoudbare code

#### SEO
- ✅ `robots.txt` met correcte content (Disallow: /)
- ✅ Meta robots tags in alle HTML files
- ✅ Optimized images
- ✅ Semantic HTML voor betere indexering

---

## 💡 Extra Features

Bovenop de minimale vereisten zijn toegevoegd:

- 🎨 Advanced CSS animations en transitions
- 📱 Fixed bottom navigation bar op mobiel
- ⚡ Optimale performance
- ♿ Volledig toegankelijk design
- 🎯 Interactive elements met hover states
- 🔄 Smooth page transitions
- 📐 Consistent design systeem
- 🖼️ Responsive images met art direction

---

## 🌐 Browser Compatibility

Getest en werkend in:
- ✅ Chrome (laatste versie)
- ✅ Firefox (laatste versie)
- ✅ Safari (laatste versie)
- ✅ Edge (laatste versie)
- ✅ Mobile browsers (iOS & Android)

---

## 📥 Installatie & Gebruik

### Lokaal Draaien

1. **Clone de repository**
```bash
git clone https://github.com/omerasik/stam_museum_gent.git
cd stam_museum_gent
```

2. **Open in browser**
```bash
# Optie 1: Direct openen
open index.html

# Optie 2: Met Python server
python -m http.server 8000

# Optie 3: Met Node.js
npx http-server
```

3. **Bezoek de site**
```
http://localhost:8000
```

---

## 📸 Screenshots

### Desktop
- Modern, clean design
- Volledige navigatie
- Multi-column layouts

### Tablet
- Hamburger menu
- 2-column card grids
- Touch-optimized

### Mobile
- Mobile-first design
- Single column layout
- Fixed bottom bar
- Touch-friendly buttons

---

## 🎓 Technische Highlights

### CSS Technieken
```css
/* Custom Properties */
:root {
  --brand-green: hsl(158, 100%, 27%);
  --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
}

/* Responsive Grid */
.uitgelicht-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* Smooth Animations */
.nav-list {
  transition: left 0.3s ease;
}
```

### JavaScript Patterns
```javascript
// Event Delegation
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
  });
});

// Click Outside Handler
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target)) {
    closeMenu();
  }
});
```

---

## 📝 Opdracht Requirements

### Originele Briefing
├── app/
│   ├── static/
│   │   ├── css/
│   │   │   ├── main.css
│   │   │   ├── reset.css
│   │   ├── images/
│   │   │   ├── ...
│   │   ├── js/
│   │   │   ├── main.js
│   │   ├── fonts/
│   │       ├── ...
│   │   ├── videos/
│   │       ├── ...
│   ├── events/
│   │   ├── he-who-keeps-remains.html
│   ├── index.html (home)
│   ├── history.html
│   ├── visit.html
│   ├── about.html
│   ├── robots.txt
│   ├── README.md
│       ├── **Hierin zet je een link naar de online versie via GitHub Pages**
├── docs/
│   ├── screencast.mp4


Deze opdracht heeft als intentie een werkplek te simuleren waarin je gevraagd wordt om een website te bouwen gebaseerd op een reeds gemaakt design voor een echte klant. Je zal jouw kennis van HTML, CSS en JS samen moeten brengen om deze website individueel en zelfstandig te kunnen bouwen.

Als na-te-bouwen-design krijg je de vereenvoudigde versie van de STAM website (https://stamgent.be/nl_beLinks to an external site.).

Je vindt het volledige design voor deze opdracht hier: Figma file Download Figma file.

 

Assets (download)
Iconen en logo'sDownload Iconen en logo's
De foto's kan je zelf downloaden van de na-te-bouwen website, of exporteren uit Figma.
 

Fonts
Titels: Albert Sans (https://fonts.google.com/specimen/Albert+SansLinks to an external site.)
Body text: Roboto Regular/Medium (https://fonts.google.com/specimen/Roboto?query=robotoLinks to an external site.)
 


 

HTML
Je mag je niet baseren op de HTML die je kan vinden op de live site. Je bouwt zelf je eigen semantische structuur op.

Zorg ervoor dat alle images die je gebruikt, in je lokale folder staan en een geoptimaliseerde bestandsgrootte hebben.
 

CSS
Iedere pagina is helemaal responsive.
Je gebruikt voor deze opdracht opnieuw Artevelde's reset.cssLinks to an external site..
Hou rekening met de browser-accessibility settings voor font-groottes. 
 

JavaScript
Je gebruikt JavaScript om de hamburger functionaliteit uit te werken (minimale vereiste)
Je mag extra JavaScript toevoegen, waar nodig/nuttig
Je mag meerdere JavaScript bestanden aanmaken. Maak in dat geval wel gebruik van een IIFE om problemen met naamgeving te vermijden
 

Zoekmachines
Aangezien je een eigen versie van een bestaande website online zet, wil je vermijden dat Google deze als de echte STAM website aanschouwt.

Gebruik daarom de juiste robots.txt file met de volgende inhoud:
User-agent: *
Disallow: /

Vermeld ook in élke html-file o.a. de volgende meta-elementen in de <head>:
<meta name="robots" content="noindex,nofollow">

 


 

