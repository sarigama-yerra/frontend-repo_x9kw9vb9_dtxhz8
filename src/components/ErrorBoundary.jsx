import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // You could send this to a logging service
    // console.error('App crashed:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white text-pink-900 flex items-center justify-center p-6">
          <div className="max-w-lg w-full rounded-2xl border border-white/60 bg-white/70 backdrop-blur-2xl p-6 shadow-2xl text-center">
            <h2 className="text-2xl font-bold text-pink-950">Something went wrong</h2>
            <p className="mt-2 text-sm text-pink-900/80">The page encountered an error and stopped rendering. You can try reloading the section.</p>
            {import.meta.env.MODE !== 'production' && this.state.error && (
              <pre className="mt-4 text-left text-xs bg-rose-50 text-rose-700 p-3 rounded-lg overflow-auto max-h-48">
                {String(this.state.error?.message || this.state.error)}
              </pre>
            )}
            <button onClick={this.handleReset} className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white px-4 py-2 text-sm shadow-lg shadow-rose-300/40 hover:shadow-rose-400/60 transition-shadow">
              Try again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
