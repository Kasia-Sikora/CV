const ListManager = () => {
  return (
    <>
      <img
        src="https://raw.githubusercontent.com/Kasia-Sikora/shopping-list-manager/main/docs/demo.gif"
        alt="Shopping List Manager" />

      <p>Live demo: <a href="https://shopping-list-manager-seven.vercel.app" target="_blank" rel="noreferrer">shopping-list-manager</a></p>
      <p>Frontend code: <a href="https://github.com/Kasia-Sikora/shopping-list-manager" target="_blank" rel="noreferrer">GitHub: shopping-list-manager</a></p>
      <p>Backend code: <a href="https://github.com/Kasia-Sikora/shopping-list-manager-api" target="_blank" rel="noreferrer">GitHub: shopping-list-manager-api</a></p>

      <h4>Description:</h4>
      <p>An offline-first shopping list app with nested drag-and-drop items. The local database is the source of truth, so
        the app works instantly with no network — a background sync engine reconciles changes with the backend once
        connectivity returns.</p>
      <p>The core idea is an inversion: the local store is the source of truth, and the server is something the app syncs
        toward — not the other way around.</p>

      <h4>Key features:</h4>
      <ul>
        <li>Offline-first — every read/write hits IndexedDB first; fully usable with no connection</li>
        <li>Background sync engine — queues offline changes and retries with incremental backoff (capped) when back online</li>
        <li>Bidirectional sync — pulls remote changes on load, pushes local changes via an outbox queue</li>
        <li>Conflict resolution — Last-Write-Wins on timestamps, with a documented upgrade path (item-level merge, then operation-based sync, then CRDTs)</li>
        <li>Nested drag-and-drop — reorder and re-nest items in a tree structure</li>
        <li>Optimistic updates, keyboard navigation, and a dark / light theme</li>
      </ul>

      <h4>Tech stack:</h4>
      <ul>
        <li>Frontend: React 19, TypeScript (strict), Vite, Zustand, idb (IndexedDB), @dnd-kit, Tailwind CSS</li>
        <li>Backend: Next.js API, PostgreSQL (Supabase)</li>
        <li>Testing and CI: Vitest, Testing Library, fake-indexeddb, GitHub Actions, Codecov, SonarCloud, Vercel</li>
      </ul>

      <h4>Testing and quality:</h4>
      <ul>
        <li>150+ automated tests — IndexedDB integration, sync-engine logic, and component/interaction tests</li>
        <li>CI on every push and PR: lint, then test with coverage, then build</li>
        <li>Lighthouse: 100 for Performance, Accessibility, Best Practices and SEO on desktop (94 performance on mobile)</li>
      </ul>
    </>
  )
}

export default ListManager;
