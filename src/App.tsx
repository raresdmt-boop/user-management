export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-brand">
          <div className="icon">U</div>
          User Management
        </div>
      </header>

      <aside className="sidebar">
        <nav className="sidebar-section">
          <div className="sidebar-label">Principal</div>
          <ul className="sidebar-nav">
            <li>
              <a href="#" className="active">
                <span className="nav-icon">&#9633;</span> Utilizatori
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main">
        {/* 1. src/types/user.ts — tipurile din răspunsurile API-ului (GET /api/users) */}
        {/* 2. src/api/users.ts — funcțiile cu fetch care cheamă API-ul */}
        {/* 3. src/components/UserList.tsx — lista, după public/mockup/index.html */}
        {/* 4. stările din public/mockup/states.html: se încarcă, gol, eroare */}
      </main>
    </div>
  );
}
