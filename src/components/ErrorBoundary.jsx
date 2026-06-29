import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{
        minHeight: '100dvh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 'var(--sp-8)', textAlign: 'center', gap: 'var(--sp-5)'
      }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--text)' }}>
          Something went wrong.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', maxWidth: 400 }}>
          {this.state.error?.message ?? 'An unexpected error occurred.'}
        </p>
        <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ error: null })}
          >
            Try again
          </button>
          <Link to="/dashboard" className="btn btn-secondary">
            Back to dashboard
          </Link>
        </div>
      </div>
    );
  }
}
