# 💇‍♀️ Dushi Coiffeur - Professionelle Website

Moderne, minimalistische Website für Dushi Coiffeur mit schwarzem Hintergrund und eleganten goldenen Akzenten.

## 📋 Seiten

1. **Startseite** (index.html) - Hero-Bereich, Features, Öffnungszeiten, Testimonials
2. **Dienstleistungen** (services.html) - Alle Services mit Preisen
3. **Über Uns** (about.html) - Team und Unternehmensinformationen
4. **Kontakt** (contact.html) - Kontaktformular und Informationen
5. **Termin buchen** (booking.html) - 4-Schritte Buchungssystem
6. **Impressum** (impressum.html) - Rechtliche Informationen
7. **Datenschutz** (datenschutz.html) - Datenschutzerklärung

## 🎨 Design-Features

### Farbschema
- **Schwarz (#000000)** - Haupthintergrund für luxuriösen Look
- **Gold (#d4af37)** - Primärfarbe für Akzente und Highlights
- **Weiß (#ffffff)** - Haupttext für optimale Lesbarkeit
- **Grau (#b0b0b0)** - Sekundärer Text

### Moderne Funktionen
- ✅ Vollständig responsive (Mobile, Tablet, Desktop)
- ✅ Moderne Typografie mit System-Schriften
- ✅ Sanfte Animationen und Übergänge
- ✅ Sticky Navigation mit Backdrop-Filter
- ✅ Professionelle Hover-Effekte
- ✅ Gradient-Hintergründe und Glow-Effekte
- ✅ Hamburger-Menü für Mobile
- ✅ Optimierte Ladezeiten

## 📁 Dateistruktur

```
dushicoiffeur/
├── index.html
├── services.html
├── about.html
├── contact.html
├── booking.html
├── impressum.html
├── datenschutz.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── hero/
    ├── services/
    ├── team/
    └── salon/
```

## 📸 Bilder hinzufügen

Aktuell verwendet die Website Emoji-Platzhalter (👤, ✂️, 💇) für fehlende Bilder.

### Empfohlene Bildgrößen:
- **Hero-Bild**: 1920x1080px
- **Service-Bilder**: 800x600px
- **Team-Fotos**: 400x400px (quadratisch)
- **Salon-Fotos**: 1200x800px

### So fügen Sie Bilder hinzu:
1. Speichern Sie Ihre Bilder im entsprechenden Unterordner von `images/`
2. Öffnen Sie die jeweilige HTML-Datei
3. Ersetzen Sie die Emoji-Platzhalter durch `<img>` Tags:
   ```html
   <img src="images/team/stylist1.jpg" alt="Beschreibung">
   ```

## 🔧 Terminbuchung einrichten

Das aktuelle Buchungssystem ist nur eine Frontend-Demo. Für echte Buchungen:

### Kostenlose Lösungen:
1. **Setmore** (empfohlen) - Unbegrenzte Termine, 4 Mitarbeiter
2. **Calendly** - 1 Event-Typ kostenlos
3. **Cal.com** - Open Source, selbst hosten

### Integration:
1. Konto bei einem Dienst erstellen
2. Buchungs-Widget Code kopieren
3. In `booking.html` einfügen oder Button-Link anpassen

## ⚙️ Anpassungen

### Kontaktinformationen ändern:
- Öffnen Sie jede HTML-Datei
- Suchen Sie nach "Musterstrasse 123", "+41 12 345 67 89", "info@dushicoiffeur.ch"
- Ersetzen Sie durch Ihre echten Daten

### Farben anpassen:
- Öffnen Sie `css/style.css`
- Ändern Sie die CSS-Variablen im `:root` Bereich:
  ```css
  :root {
      --primary-color: #d4af37;  /* Ihre Farbe */
      --black: #000000;
  }
  ```

### Öffnungszeiten:
- `index.html` - Bereich "Öffnungszeiten" aktualisieren

## 🚀 Website veröffentlichen

### Kostenlose Hosting-Optionen:
- **GitHub Pages** - Kostenlos, einfach
- **Netlify** - Automatische Deployments
- **Vercel** - Schnell und kostenlos

### Schritte für GitHub Pages:
1. GitHub-Konto erstellen
2. Neues Repository erstellen
3. Alle Dateien hochladen
4. Settings → Pages → Branch "main" auswählen
5. Fertig! URL wird angezeigt

## 📱 Social Media Links anpassen

In der Footer-Sektion jeder HTML-Datei:
```html
<div class="social-links">
    <a href="https://facebook.com/IHRE-SEITE"><i class="fab fa-facebook"></i></a>
    <a href="https://instagram.com/IHR-PROFIL"><i class="fab fa-instagram"></i></a>
