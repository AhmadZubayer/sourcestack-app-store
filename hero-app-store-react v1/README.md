## LIVE LINK: https://hero-app-store-react-webdevassph08.netlify.app/

# **HERO APP STORE **

# 📱 About The Project

Hero App Store, a modern web-based app store where users can browse, search, and install their favorite applications.
This is a project of Web Development course at Programming Hero built by Ahmad Zubayer.
# ✨ Key Features

- **Browse All Apps**: View a complete catalog of available applications with beautiful cards
- **Trending Apps**: Discover the most popular apps on the platform
- **Search Functionality**: Quickly find apps by name or category
- **Detailed App Pages**: See app ratings, reviews, downloads, and descriptions with interactive charts
- **⬇Install Apps**: Click to "install" apps (saved in your browser)
- **Manage Installed Apps**: View all your installed apps in one place
- **Uninstall Apps**: Remove apps you no longer need
- **Sort & Filter**: Sort installed apps by download count
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful UI**: Clean, modern interface with smooth animations

## 🛠️ Technology Stack

- **React 19** 
- **React Router 7**
- **Tailwind CSS 4**
- **DaisyUI 5** ( Pre-built UI components)
- **Recharts**
- **React Toastify**
- **React Hooks** (Managing component state)
- **Axios** (Fetching app data from JSON file)
- **Vite**
- **localStorage**

## 📂 Project Structure & Architecture

### File Structure
```
hero-app-store/
├── public/
│   ├── app-list.json              # App data source (fetched via Axios)
│   └── Apps/                      # App icons/images
│
├── src/
│   ├── main.jsx                   # App entry point, Router configuration
│   ├── App.jsx                    # Root layout with Nav, Footer, Outlet
│   ├── index.css                  # Global styles
│   │
│   ├── components/
│   │   │
│   │   │
│   │   ├── pages/                 # Route Pages (render in <Outlet />)
│   │   │   ├── Home.jsx           # "/" - Landing page
│   │   │   ├── AllApps.jsx        # "/allApps" - All apps catalog
│   │   │   ├── AppDetailsPage.jsx # "/app/:appId" - Single app details
│   │   │   ├── InstalledAppsPage.jsx # "/installedApps" - User's installed apps
│   │   │   ├── AppNotFound.jsx    # "/app-not-found" - App doesn't exist
│   │   │   └── PageDoesNotExist.jsx # "*" - 404 page
│   │   │
│   │   ├── apps/                  # App-specific Components
│   │   │   ├── TrendingApps.jsx   # Shows top 6 trending apps
│   │   │   ├── AllAppsContainer.jsx # Grid of all apps
│   │   │   ├── AppCard.jsx        # Single app card (used in grids)
│   │   │   ├── SearchApp.jsx      # Search bar component
│   │   │   ├── AppDetails.jsx     # Full app info with install button
│   │   │   ├── InstalledApps.jsx  # List of installed apps
│   │   │   └── InstalledAppCard.jsx # Single installed app with uninstall
│   │   │
│   │   └── ui/                    # Reusable UI Components
│   │       ├── Nav.jsx            # Navigation bar
│   │       ├── Footer.jsx         # Footer
│   │       ├── Banner.jsx         # Hero banner
│   │       ├── Stats.jsx          # Statistics section
│   │       └── Loading.jsx        # Loading spinner
│   │
│   └── assets/                    # Images, icons, logos
│
└── package.json
```

---

### 🔄 Routing Structure (React Router)

```
main.jsx (Router Config)
    ↓
App.jsx (Root Layout: <Nav> + <Outlet> + <Footer>)
    ├── "/" (index)
    │   └── Home.jsx
    │       ├── Banner.jsx
    │       ├── Stats.jsx
    │       └── TrendingApps.jsx
    │           └── AppCard.jsx (×6)
    │
    ├── "/allApps"
    │   └── AllApps.jsx
    │       ├── SearchApp.jsx
    │       └── AllAppsContainer.jsx
    │           └── AppCard.jsx (×N)
    │
    ├── "/app/:appId"
    │   └── AppDetailsPage.jsx
    │       └── AppDetails.jsx
    │           └── Recharts (Bar Chart)
    │
    ├── "/installedApps"
    │   └── InstalledAppsPage.jsx
    │       └── InstalledApps.jsx
    │           └── InstalledAppCard.jsx (×N)
    │
    ├── "/app-not-found"
    │   └── AppNotFound.jsx
    │
    └── "*" (404)
        └── PageDoesNotExist.jsx
```

---

### 📊 Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   PUBLIC/APP-LIST.JSON                      │
│                               │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ Axios.get('/app-list.json')
                      │ (in Router loaders)
                      ↓
┌─────────────────────────────────────────────────────────────┐
│                   REACT ROUTER LOADERS                      │
│  - Home loader → appData                                    │
│  - AllApps loader → appData                                 │
│  - AppDetailsPage loader → app (single)                     │
│  - InstalledAppsPage loader → appData                       │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ Props (appData / app)
                      ↓
┌─────────────────────────────────────────────────────────────┐
│                      PAGE COMPONENTS                        │
│  - Home.jsx                                                 │
│  - AllApps.jsx                                              │
│  - AppDetailsPage.jsx                                       │
│  - InstalledAppsPage.jsx                                    │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ Props (app / appData)
                      ↓
┌─────────────────────────────────────────────────────────────┐
│               CHILD COMPONENTS (Receive Props)              │
│  - TrendingApps.jsx                                         │
│  - AllAppsContainer.jsx                                     │
│  - AppDetails.jsx                                           │
│  - InstalledApps.jsx                                        │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ Props (individual app)
                      ↓
┌─────────────────────────────────────────────────────────────┐
│                  PRESENTATIONAL COMPONENTS                  │
│  - AppCard.jsx (displays app info)                         │
│  - InstalledAppCard.jsx (displays + uninstall button)      │
└─────────────────────────────────────────────────────────────┘
```

---

### 🔐 State Management & Storage

```
┌─────────────────────────────────────────────────────────────┐
│                    LOCALSTORAGE                             │
│         Key: 'installedApps'                                │
│         Value: [1, 5, 12, 23] (array of app IDs)            │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ↓
        ┌─────────────────────────────┐
        │   READ (checkIfInstalled)   │
        │   - AppDetails.jsx          │
        │   - InstalledApps.jsx       │
        └─────────────┬───────────────┘
                      │
        ┌─────────────┴─────────────┐
        ↓                           ↓
┌───────────────────┐     ┌──────────────────────┐
│  WRITE (Install)  │     │  WRITE (Uninstall)   │
│  AppDetails.jsx   │     │ InstalledAppCard.jsx │
│  - Add app ID     │     │  - Remove app ID     │
│  - setInstalled() │     │  - onUninstall()     │
└───────────────────┘     └──────────────────────┘
```

---

## **Use of AI**
AI Tools such as Github Copilot (Claude Sonnet 4.5) was used for the following purposes:
- Brainstorming and refining the overall **project architecture**.  
- Generating the initial **`app-list.json`** file structure.  
- **Debugging image path** handling issues.  
- Understanding and implementing a **dynamic search** functionality.  
- Learning how to **sort the app list** efficiently.  
- **Debugging installation/uninstallation** error handling logic.  
- Optimizing parts of the **UI** that were not responding correctly after backend updates.
- Formatting the **readme.md** file. 

**No direct copy-pasting from AI was done. All AI assistance was used strictly for understanding concepts, debugging, and optimization.**


## 🖼️ Icon Courtesy

- [**Flaticon**](https://www.flaticon.com/)  
- [**UXWing**](https://uxwing.com/)  
- [**Vecteezy**](https://www.vecteezy.com/)  
- [**CSS Loaders & Spinners**](https://cssloaders.github.io/) 



