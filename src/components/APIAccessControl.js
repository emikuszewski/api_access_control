import React, { useState } from 'react';

const APIAccessControl = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [highlightedPart, setHighlightedPart] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    fundamentalQuestion: true,
    keyComponents: true,
    whyMatters: true,
    basicPolicy: true,
    advancedPolicy: true,
    dynamicPolicy: true,
    apiComponents: true,
    requestDetails: true,
    implementation: true,
    keyBenefits: true
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-800 text-white p-6">
        <h1 className="text-3xl font-bold">API Access Control</h1>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-700 text-white p-4">
        <ul className="flex space-x-6">
          <li 
            className={`cursor-pointer px-3 py-1 rounded ${activeTab === 'overview' ? 'bg-blue-600' : 'hover:bg-slate-600'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </li>
          <li 
            className={`cursor-pointer px-3 py-1 rounded ${activeTab === 'policies' ? 'bg-blue-600' : 'hover:bg-slate-600'}`}
            onClick={() => setActiveTab('policies')}
          >
            Policies
          </li>
          <li 
            className={`cursor-pointer px-3 py-1 rounded ${activeTab === 'requests' ? 'bg-blue-600' : 'hover:bg-slate-600'}`}
            onClick={() => setActiveTab('requests')}
          >
            API Requests
          </li>
          <li 
            className={`cursor-pointer px-3 py-1 rounded ${activeTab === 'implementation' ? 'bg-blue-600' : 'hover:bg-slate-600'}`}
            onClick={() => setActiveTab('implementation')}
          >
            Implementation
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">API Access Control Framework</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 
                className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer hover:text-blue-700"
                onClick={() => toggleSection('fundamentalQuestion')}
              >
                <span>The Fundamental Question</span>
                <span>{expandedSections.fundamentalQuestion ? '▼' : '►'}</span>
              </h3>
              
              {expandedSections.fundamentalQuestion && (
                <>
                  <div className="text-center mb-6">
                    <p className="text-lg">
                      <span className="font-bold text-blue-700">Who</span> can do <span className="font-bold text-green-600">what</span> (and on <span className="font-bold text-green-400">what</span>) and <span className="font-bold text-yellow-500">when/where</span>?
                    </p>
                  </div>
                  
                  <p className="mb-4">
                    PlainID addresses the fundamental question of access control by defining who can perform what actions on which resources and under what conditions. This comprehensive approach ensures that all API requests are properly authorized before execution.
                  </p>
                </>
              )}
              
              <h3 
                className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer hover:text-blue-700 mt-6"
                onClick={() => toggleSection('keyComponents')}
              >
                <span>Key Components</span>
                <span>{expandedSections.keyComponents ? '▼' : '►'}</span>
              </h3>
              
              {expandedSections.keyComponents && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-medium">Identity (Who)</span>: The user or system making the request</li>
                    <li><span className="font-medium">Action (What)</span>: The operation being performed (view, approve, etc.)</li>
                    <li><span className="font-medium">Resource (What)</span>: The asset being accessed (accounts, transactions, etc.)</li>
                    <li><span className="font-medium">Conditions (When/Where)</span>: Contextual requirements (MFA, amount limits, etc.)</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 
                className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer hover:text-blue-700"
                onClick={() => toggleSection('whyMatters')}
              >
                <span>Why API Access Control Matters</span>
                <span>{expandedSections.whyMatters ? '▼' : '►'}</span>
              </h3>
              
              {expandedSections.whyMatters && (
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Security</h4>
                    <p>Prevents unauthorized access to sensitive resources and operations</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Compliance</h4>
                    <p>Helps meet regulatory requirements for data access and protection</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Flexibility</h4>
                    <p>Adapts to complex business rules and contextual requirements</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Policies Section */}
        {activeTab === 'policies' && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Authorization Policies</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Basic Policy */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <h3 
                  className="text-xl font-semibold text-teal-700 mb-4 flex justify-between items-center cursor-pointer hover:text-teal-900"
                  onClick={() => toggleSection('basicPolicy')}
                >
                  <span>Basic Policy</span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    {expandedSections.basicPolicy ? 'Hide Details' : 'Show Details'}
                  </span>
                </h3>
                
                <div className="p-4 bg-gray-50 rounded-lg mb-4">
                  <code className="font-mono">A <span className="bg-blue-100 px-1">manager</span> can <span className="bg-green-100 px-1">view</span> assigned <span className="bg-green-200 px-1">accounts</span></code>
                </div>
                
                {expandedSections.basicPolicy && (
                  <div className="mt-4 animate-fadeIn">
                    <h4 className="font-semibold mb-2">Policy Breakdown:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li><span className="font-medium">Subject (Who)</span>: Manager - the person performing the action</li>
                      <li><span className="font-medium">Action (What)</span>: View - a read-only operation</li>
                      <li><span className="font-medium">Resource (What)</span>: Accounts - the data being accessed</li>
                      <li><span className="font-medium">Condition</span>: Assignment - only accounts assigned to this manager</li>
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Advanced Policy */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 
                  className="text-xl font-semibold text-blue-700 mb-4 flex justify-between items-center cursor-pointer hover:text-blue-900"
                  onClick={() => toggleSection('advancedPolicy')}
                >
                  <span>Advanced Policy</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {expandedSections.advancedPolicy ? 'Hide Details' : 'Show Details'}
                  </span>
                </h3>
                
                <div className="p-4 bg-gray-50 rounded-lg mb-4">
                  <code className="font-mono">A <span className="bg-blue-100 px-1">manager</span> can <span className="bg-green-100 px-1">approve or decline transactions</span> of assigned <span className="bg-green-200 px-1">accounts</span> if the transaction amount less than $100,000 only with <span className="bg-yellow-100 px-1">MFA</span></code>
                </div>
                
                {expandedSections.advancedPolicy && (
                  <div className="mt-4 animate-fadeIn">
                    <h4 className="font-semibold mb-2">Policy Breakdown:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li><span className="font-medium">Subject (Who)</span>: Manager - the person performing the action</li>
                      <li><span className="font-medium">Action (What)</span>: Approve/decline - transaction operations</li>
                      <li><span className="font-medium">Resource (What)</span>: Accounts/transactions - the data being acted upon</li>
                      <li><span className="font-medium">Conditions (When/Where)</span>:
                        <ul className="list-circle pl-6 mt-1">
                          <li>Assignment - only accounts assigned to this manager</li>
                          <li>Amount limit - transaction must be less than $100,000</li>
                          <li>MFA required - multi-factor authentication must be completed</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 
                className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer hover:text-blue-700"
                onClick={() => toggleSection('dynamicPolicy')}
              >
                <span>Dynamic Policy Enforcement</span>
                <span>{expandedSections.dynamicPolicy ? '▼' : '►'}</span>
              </h3>
              
              {expandedSections.dynamicPolicy && (
                <>
                  <p className="mb-4">
                    Policies are enforced at runtime when API requests are received. Each request is analyzed against 
                    the applicable policies to determine if access should be granted or denied.
                  </p>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-2">Key Benefits:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Centralized policy management separate from application code</li>
                      <li>Contextual awareness allowing for dynamic decision making</li>
                      <li>Flexible rule creation for complex business requirements</li>
                      <li>Consistent enforcement across all API endpoints</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* API Requests Section */}
        {activeTab === 'requests' && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Sample API Request</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 
                className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer hover:text-blue-700"
                onClick={() => toggleSection('apiComponents')}
              >
                <span>API Request Components</span>
                <span>{expandedSections.apiComponents ? '▼' : '►'}</span>
              </h3>
              
              {expandedSections.apiComponents && (
                <>
                  <p className="mb-4">
                    Every API request is analyzed to ensure compliance with defined rules. Here's how a typical request is structured:
                  </p>
                  
                  <div className="relative bg-gray-100 p-10 rounded-lg mb-6 overflow-x-auto">
                    <div 
                      className={`absolute top-0 left-0 h-full w-full bg-opacity-0 pointer-events-none ${highlightedPart ? 'bg-opacity-10 bg-blue-500' : ''}`}
                    ></div>
                    
                    {/* API Request Diagram */}
                    <div className="flex flex-col items-center">
                      <div className="flex flex-nowrap items-center justify-center gap-8 min-w-max">
                        {/* Auth Header */}
                        <div 
                          className={`flex flex-col items-center transition-all ${highlightedPart === 'auth' ? 'scale-105' : ''}`}
                          onMouseEnter={() => setHighlightedPart('auth')}
                          onMouseLeave={() => setHighlightedPart(null)}
                        >
                          <div className="border-2 border-blue-500 rounded px-3 py-2 bg-white min-w-48 text-center">
                            <span className="text-sm font-semibold">Authorization header</span>
                          </div>
                          <div className="h-8 w-px bg-gray-400"></div>
                          <div className="text-center max-w-xs">
                            <span className="text-xs font-medium">Identity JWT, AuthN Method, Etc.</span>
                          </div>
                        </div>
                        
                        {/* HTTP Method */}
                        <div 
                          className={`flex flex-col items-center transition-all ${highlightedPart === 'method' ? 'scale-105' : ''}`}
                          onMouseEnter={() => setHighlightedPart('method')}
                          onMouseLeave={() => setHighlightedPart(null)}
                        >
                          <div className="border-2 border-gray-500 rounded px-3 py-2 bg-white min-w-32 text-center">
                            <span className="text-sm font-semibold">GET/POST</span>
                          </div>
                          <div className="h-8 w-px bg-gray-400"></div>
                          <div className="text-center">
                            <span className="text-xs font-medium">Action</span>
                          </div>
                        </div>
                        
                        {/* URL */}
                        <div 
                          className={`flex flex-col items-center transition-all ${highlightedPart === 'url' ? 'scale-105' : ''}`}
                          onMouseEnter={() => setHighlightedPart('url')}
                          onMouseLeave={() => setHighlightedPart(null)}
                        >
                          <div className="border-2 border-gray-500 rounded px-3 py-2 bg-white min-w-96">
                            <div className="text-sm font-mono text-center">
                              <span>https://GoldFinance.io/api/v1/</span>
                              <span className="bg-green-100 px-1">accounts</span>
                              <span>/</span>
                              <span className="bg-yellow-100 px-1">001</span>
                            </div>
                            <div className="flex justify-center mt-2 px-1">
                              <div className="text-center border-t border-gray-300 pt-1 px-8">
                                <span className="font-medium">Requested URL</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-full justify-between mt-3">
                            <div className="flex-grow"></div>
                            <div className="flex flex-col items-center">
                              <div className="h-8 w-px bg-gray-400"></div>
                              <div className="text-center px-2 py-1 bg-green-100 rounded">
                                <span className="text-xs font-medium">Asset Type: "accounts"</span>
                              </div>
                            </div>
                            <div className="w-8"></div>
                            <div className="flex flex-col items-center">
                              <div className="h-8 w-px bg-gray-400"></div>
                              <div className="text-center px-2 py-1 bg-yellow-100 rounded">
                                <span className="text-xs font-medium">Asset ID: "001"</span>
                              </div>
                            </div>
                            <div className="flex-grow"></div>
                          </div>
                        </div>
                        
                        {/* Response */}
                        <div 
                          className={`flex flex-col items-center transition-all ${highlightedPart === 'response' ? 'scale-105' : ''}`}
                          onMouseEnter={() => setHighlightedPart('response')}
                          onMouseLeave={() => setHighlightedPart(null)}
                        >
                          <div className="border-2 border-gray-500 rounded px-3 py-2 bg-white min-w-32 text-center">
                            <div className="text-sm font-semibold">Permit</div>
                            <div className="text-sm font-semibold">Deny</div>
                          </div>
                          <div className="h-8 w-px bg-gray-400"></div>
                          <div className="text-center">
                            <span className="text-xs font-medium">Response</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              
              {/* Component Details */}
              <h3 
                className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer hover:text-blue-700"
                onClick={() => toggleSection('requestDetails')}
              >
                <span>Request Component Details</span>
                <span>{expandedSections.requestDetails ? '▼' : '►'}</span>
              </h3>
              
              {expandedSections.requestDetails && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  {highlightedPart === 'auth' && (
                    <div className="animate-fadeIn">
                      <h5 className="font-medium">Authorization Header</h5>
                      <p>Carries essential details like the user's identity in the form of a JWT token, the authentication method, and other contextual data. This is the key to unlocking the API's resources.</p>
                    </div>
                  )}
                  
                  {highlightedPart === 'method' && (
                    <div className="animate-fadeIn">
                      <h5 className="font-medium">HTTP Method</h5>
                      <p>Defines the action being performed on the resource (GET for reading, POST for creating, etc.). This maps directly to the actions defined in the policies.</p>
                    </div>
                  )}
                  
                  {highlightedPart === 'url' && (
                    <div className="animate-fadeIn">
                      <h5 className="font-medium">URL Structure</h5>
                      <p>The full string "https://GoldFinance.io/api/v1/accounts/001" is the <strong>Requested URL</strong>, which is structured to align directly with policy definitions.</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li><strong>Asset Type</strong>: The "accounts" portion of the URL identifies the resource category being accessed.</li>
                        <li><strong>Asset ID</strong>: The "001" portion identifies the specific instance of the resource.</li>
                      </ul>
                      <p className="mt-2">This structure allows the system to accurately map the request to the appropriate policy rules.</p>
                    </div>
                  )}
                  
                  {highlightedPart === 'response' && (
                    <div className="animate-fadeIn">
                      <h5 className="font-medium">Response</h5>
                      <p>After evaluating the request against applicable policies, the system returns either a "Permit" (access granted) or "Deny" (access rejected) response.</p>
                    </div>
                  )}
                  
                  {!highlightedPart && (
                    <p>Hover over the diagram components above to see detailed explanations.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Implementation Section */}
        {activeTab === 'implementation' && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Implementation Details</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 
                className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer hover:text-blue-700"
                onClick={() => toggleSection('implementation')}
              >
                <span>How PlainID Maps Policies to API Requests</span>
                <span>{expandedSections.implementation ? '▼' : '►'}</span>
              </h3>
              
              {expandedSections.implementation && (
                <ol className="space-y-4 mb-6">
                  <li className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium">1. Authorization Header Analysis</h4>
                    <p>The system extracts identity information from the JWT token and authentication method details to establish who is making the request.</p>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium">2. URL Structure Parsing</h4>
                    <p>The API endpoint URL is parsed to identify the resource type (accounts) and specific resource ID (001) being accessed.</p>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium">3. Policy Evaluation</h4>
                    <p>The system matches the request details against applicable policies to determine if the requesting identity has permission to perform the action on the specified resource.</p>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium">4. Contextual Conditions</h4>
                    <p>Additional conditions are evaluated, such as MFA status, transaction amounts, or other contextual factors required by the policies.</p>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium">5. Access Decision</h4>
                    <p>Based on the policy evaluation, the system returns a "Permit" or "Deny" decision before the API request is processed.</p>
                  </li>
                </ol>
              )}
              
              <h3 
                className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer hover:text-blue-700"
                onClick={() => toggleSection('keyBenefits')}
              >
                <span>Key Benefits</span>
                <span>{expandedSections.keyBenefits ? '▼' : '►'}</span>
              </h3>
              
              {expandedSections.keyBenefits && (
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>These components enable the system to accurately identify the specific resource being requested</li>
                    <li>PlainID maps these segments seamlessly within its platform, ensuring appropriate access decisions are enforced</li>
                    <li>Decisions are directly tied to the relationship between the asset type and the policy</li>
                    <li>Ensures secure and context-aware Access Control</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white p-6 text-center">
        <p>Made by the SE Team for Walkthrough Purposes Only</p>
      </footer>
    </div>
  );
};

export default APIAccessControl;
