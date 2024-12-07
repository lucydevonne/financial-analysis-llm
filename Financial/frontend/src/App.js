import React, { useState } from 'react';
import { Search, RefreshCcw } from 'lucide-react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    // TODO: Connect to your backend
    // For now, let's simulate a response
    setTimeout(() => {
      setResults([
        {
          symbol: 'AAPL',
          name: 'Apple Inc.',
          description: 'Technology company that designs and manufactures smartphones, computers, and software.'
        },
        {
          symbol: 'GOOGL',
          name: 'Alphabet Inc.',
          description: 'Technology company specializing in internet-related services and products.'
        }
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Financial Analysis Dashboard</h1>
          <p className="text-lg text-gray-600">Powered by LLM-based Research Automation</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your research query (e.g., 'companies building data centers')"
              className="flex-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <RefreshCcw className="animate-spin" /> : <Search />}
              Search
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Results</h2>
          {results.length === 0 ? (
            <p className="text-gray-600">Enter a query above to see results</p>
          ) : (
            <div className="space-y-6">
              {results.map((result) => (
                <div key={result.symbol} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-blue-600">{result.symbol}</h3>
                    <span className="text-gray-500">{result.name}</span>
                  </div>
                  <p className="text-gray-700">{result.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;