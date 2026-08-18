const WorkExp = () => {
  return (
    <div className="workExp">
      <article>
        <div className="weHeader">
          <h4>The Stepstone Group Polska</h4>
          <div className="meta">Jun 2022 - Jun 2026</div>
        </div>
        <p>Candidate profile product — CV upload, LinkedIn import, and profile completion feeding the group's job-matching systems. React frontend with a NestJS BFF (SSR), team of 5–7 owning delivery end to end.</p>
        <div className="position">
          <div className="meta">Jul 2023 - Jun 2026</div>
          <div>
            <h5>Frontend Developer</h5>
            <ul>
              <li>Owned a CV-upload modal shipped as a standalone package in its own repo: built from scratch, integrated the design system, added event tracking, persisted uploads to the profile service. Triggerable from any page in the product.</li>
              <li>Documented its cross-repository release process (three repos incl. a legacy monorepo), removing a dependency on other teams so any team member could ship it.</li>
              <li>Implemented UI for a LinkedIn profile-import feature across three redesigns — URL-based fetch, then authenticated import, then asynchronous background import — and contributed supporting BFF endpoints and data mapping.</li>
              <li>Owned frontend and BFF work for a full product rebrand: coordinated with designers, tested across environments, signed off the release.</li>
              <li>Wrote unit tests (Vitest, Jest), contributed to the team-owned Cypress E2E suite, and reviewed teammates' pull requests.</li>
            </ul>
          </div>
        </div>
        <div className="position">
          <div className="meta">Jun 2022 - Jun 2023</div>
          <div>
            <h5>Junior Frontend Developer</h5>
            <ul>
              <li>Migrated the profile application to the company design system; later assigned to a second team to do the same on their codebase.</li>
              <li>Developed and maintained UI features with React and TypeScript</li>
              <li>Fixed bugs and refined existing components from code review and design feedback</li>
            </ul>
          </div>
        </div>
      </article>
      <article>
        <div className="weHeader">
          <h4>PKO Bank Polski</h4>
          <div className="meta">Jan 2021 - May 2022</div>
        </div>
        <p>Design-system team (frontend, UX, UI, QA, PO) building the component library used across the bank's web platform.</p>
        <div className="position">
          <div className="meta">Jan 2021 - May 2022</div>
          <div>
            <h5>Junior Frontend Developer</h5>
            <ul>
              <li>Built and maintained components consumed by product teams bank-wide — pixel-perfect, responsive, and compliant with WCAG 2.</li>
              <li>Wrote the component documentation and supported other teams implementing the system.</li>
              <li>Built and maintained an internal component editor (PUG/Jade) for authoring and previewing components.</li>
              <li>Reviewed UX/UI designs for implementation feasibility, and reviewed teammates' code.</li>
            </ul>
          </div>
        </div>
      </article>
      <article>
        <div className="weHeader">
          <h4>AKWEN Zoological Wholesaler</h4>
          <div className="meta">2011 - 2019</div>
        </div>
        <div className="position">
          <div className="meta">2016 - 2019</div>
          <div>
            <h5>Coordinator for animal health and quality</h5>
          </div>
        </div>
        <div className="position">
          <div className="meta">2011 - 2016</div>
          <div>
            <h5>Animal handler</h5>
          </div>
        </div>
      </article>
      <article>
        <div className="weHeader">
          <h4>"Strelicja" Florist</h4>
          <div className="meta">2011</div>
        </div>
        <div className="position">
          <div className="meta">2011</div>
          <div>
            <h5>Florist</h5>
          </div>
        </div>
      </article>
      <article>
        <div className="weHeader">
          <h4>Central European Entertainment</h4>
          <div className="meta">2008 - 2010</div>
        </div>
        <div className="position">
          <div className="meta">2010</div>
          <div>
            <h5>SUBWAY Restaurant manager</h5>
          </div>
        </div>
        <div className="position">
          <div className="meta">2008 - 2010</div>
          <div>
            <h5>SUBWAY Restaurant Worker</h5>
          </div>
        </div>
      </article>
    </div>
  )
}

export default WorkExp
