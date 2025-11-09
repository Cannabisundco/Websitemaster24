# GitHub Repository Setup

## Option 1: Manuell auf GitHub erstellen (Empfohlen)

1. **Gehen Sie zu GitHub.com** und loggen Sie sich ein
2. **Klicken Sie auf "New repository"** (oder gehen Sie zu: https://github.com/new)
3. **Repository-Name:** `Websitemaster24`
4. **Beschreibung:** "Professionelle Webseiten und Shopsysteme für Unternehmen"
5. **Wählen Sie "Public" oder "Private"** (je nach Präferenz)
6. **WICHTIG:** Lassen Sie alle Checkboxen leer (kein README, keine .gitignore, keine License)
7. **Klicken Sie auf "Create repository"**

8. **Führen Sie dann diese Befehle aus:**

```bash
cd "Webseiten\Webseiten Builder\Websitemaster24"
git remote add origin https://github.com/IHR-USERNAME/Websitemaster24.git
git branch -M main
git push -u origin main
```

**Ersetzen Sie `IHR-USERNAME` mit Ihrem GitHub-Benutzernamen!**

## Option 2: Mit GitHub CLI (falls installiert)

Falls Sie die GitHub CLI installieren möchten:

```bash
winget install --id GitHub.cli --accept-source-agreements
```

Dann:

```bash
cd "Webseiten\Webseiten Builder\Websitemaster24"
gh auth login
gh repo create Websitemaster24 --public --source=. --remote=origin --push
```

## Nach dem Push

Nach dem erfolgreichen Push können Sie Ihre Webseite auch auf Vercel deployen:

1. Gehen Sie zu https://vercel.com
2. Melden Sie sich mit GitHub an
3. Importieren Sie das Repository `Websitemaster24`
4. Vercel erkennt automatisch Next.js und deployt die Seite

Die Webseite ist dann live unter einer URL wie: `https://websitemaster24.vercel.app`

