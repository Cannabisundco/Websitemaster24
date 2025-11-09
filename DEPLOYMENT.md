# Deployment-Anleitung für Websitemaster24

## 🚀 Option 1: Vercel (Empfohlen - Kostenlos & Einfach)

Vercel ist der beste Hoster für Next.js-Projekte und bietet:
- ✅ **Kostenlos** für persönliche Projekte
- ✅ Automatische Deployments bei jedem Git-Push
- ✅ SSL-Zertifikat inklusive
- ✅ Globale CDN für schnelle Ladezeiten
- ✅ Einfache Einrichtung über Web-Oberfläche

### Schritt-für-Schritt Anleitung:

1. **Gehen Sie zu https://vercel.com**
2. **Klicken Sie auf "Sign Up"** und melden Sie sich mit Ihrem GitHub-Account an
3. **Klicken Sie auf "Add New Project"**
4. **Wählen Sie das Repository:** `Cannabisundco/Websitemaster24`
5. **Vercel erkennt automatisch:**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. **Klicken Sie auf "Deploy"**
7. **Fertig!** Ihre Webseite ist in 1-2 Minuten live!

Die Webseite wird unter einer URL wie `https://websitemaster24.vercel.app` erreichbar sein.

### Automatische Updates:
- Jedes Mal, wenn Sie Code zu GitHub pushen, wird die Webseite automatisch neu deployed
- Keine manuellen Schritte nötig!

---

## 🌐 Option 2: Netlify (Alternative - Auch kostenlos)

Netlify ist eine weitere großartige Option:

1. **Gehen Sie zu https://netlify.com**
2. **Melden Sie sich mit GitHub an**
3. **Klicken Sie auf "Add new site" → "Import an existing project"**
4. **Wählen Sie GitHub und das Repository `Websitemaster24`**
5. **Build-Einstellungen:**
   - Build command: `npm run build`
   - Publish directory: `.next`
6. **Klicken Sie auf "Deploy site"**

---

## 💻 Option 3: Mit Vercel CLI (Für Entwickler)

Falls Sie Node.js installieren möchten:

1. **Node.js installieren:** https://nodejs.org (LTS Version)
2. **Vercel CLI installieren:**
   ```bash
   npm install -g vercel
   ```
3. **Im Projektordner deployen:**
   ```bash
   cd "Webseiten\Webseiten Builder\Websitemaster24"
   vercel login
   vercel
   ```

---

## 📝 Wichtige Hinweise:

- **Vercel** ist die beste Wahl für Next.js-Projekte
- Beide Hosting-Optionen sind **kostenlos** für persönliche Projekte
- **SSL-Zertifikate** sind automatisch inklusive
- **Custom Domain** können Sie später hinzufügen (auch kostenlos bei Vercel)

---

## 🎯 Empfehlung:

**Verwenden Sie Vercel (Option 1)** - Es ist speziell für Next.js optimiert und die Einrichtung dauert nur 2 Minuten über die Web-Oberfläche!

