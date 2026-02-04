import React from 'react';
import { Users } from 'lucide-react';

const Collaboration = () => {
  return (
    <section className="py-5" style={{backgroundColor: '#f0f9ff'}}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="mb-4 d-inline-block p-3 rounded-circle bg-white text-primary shadow-sm">
              <Users size={32} />
            </div>
            <h2 className="h2 fw-bold mb-4 text-dark">We Need More Hands on Deck</h2>
            <p className="lead text-secondary mb-5">
              We are building the future of the lab, and we can't do it alone. 
              Whether you are a developer, a pathologist, or a student, there is a commit waiting for you.
            </p>
            
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
              <div className="px-3 py-2 bg-white border border-primary-subtle text-primary rounded-pill small fw-bold">Needed: React Developers</div>
              <div className="px-3 py-2 bg-white border border-primary-subtle text-primary rounded-pill small fw-bold">Needed: ML Engineers</div>
              <div className="px-3 py-2 bg-white border border-primary-subtle text-primary rounded-pill small fw-bold">Needed: Hematologists</div>
            </div>

            <a href="https://github.com/ujpm/Microsmart_PF" className="btn btn-primary btn-lg px-5 fw-bold rounded-pill shadow-sm">
              Check Issues on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;