'use client';

import { useState, useEffect } from 'react';

interface TestResult {
  server: string;
  location: string;
  downloadSpeed: number;
  uploadSpeed: number;
  ping: number;
  jitter: number;
  timestamp: string;
}

const servers = [
  {
    id: 'mx-cdmx',
    name: 'México CDMX',
    location: 'Ciudad de México, México',
    flag: '🇲🇽',
    endpoint: 'https://mx-cdmx.arciicloud.com/speedtest',
    recommended: true
  },
  {
    id: 'mx-gdl',
    name: 'México GDL',
    location: 'Guadalajara, México',
    flag: '🇲🇽',
    endpoint: 'https://mx-gdl.arciicloud.com/speedtest'
  },
  {
    id: 'mx-mty',
    name: 'México MTY',
    location: 'Monterrey, México',
    flag: '🇲🇽',
    endpoint: 'https://mx-mty.arciicloud.com/speedtest'
  },
  {
    id: 'us-dallas',
    name: 'USA Dallas',
    location: 'Dallas, Texas, USA',
    flag: '🇺🇸',
    endpoint: 'https://us-dallas.arciicloud.com/speedtest'
  },
  {
    id: 'us-miami',
    name: 'USA Miami',
    location: 'Miami, Florida, USA',
    flag: '🇺🇸',
    endpoint: 'https://us-miami.arciicloud.com/speedtest'
  },
  {
    id: 'br-sao',
    name: 'Brasil SAO',
    location: 'São Paulo, Brasil',
    flag: '🇧🇷',
    endpoint: 'https://br-sao.arciicloud.com/speedtest'
  }
];

export default function SpeedTestPage() {
  const [selectedServer, setSelectedServer] = useState(servers[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTest, setCurrentTest] = useState<'ping' | 'download' | 'upload' | 'complete' | null>(null);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<TestResult | null>(null);
  const [history, setHistory] = useState<TestResult[]>([]);
  const [userInfo, setUserInfo] = useState<{
    ip: string;
    location: string;
    isp: string;
  } | null>(null);

  // Simular información del usuario
  useEffect(() => {
    // En un caso real, esto obtendría la información real del usuario
    setUserInfo({
      ip: '201.XXX.XXX.XXX',
      location: 'Ciudad de México, México',
      isp: 'Telmex'
    });

    // Cargar historial del localStorage
    const savedHistory = localStorage.getItem('speedtest-history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const simulateSpeedTest = async () => {
    setIsRunning(true);
    setProgress(0);
    setResult(null);

    try {
      // Simular test de ping
      setCurrentTest('ping');
      await simulateProgress(0, 25, 2000);

      // Simular test de descarga
      setCurrentTest('download');
      await simulateProgress(25, 70, 5000);

      // Simular test de subida
      setCurrentTest('upload');
      await simulateProgress(70, 100, 3000);

      // Generar resultado simulado
      const testResult: TestResult = {
        server: selectedServer.name,
        location: selectedServer.location,
        downloadSpeed: Math.random() * 80 + 20, // 20-100 Mbps
        uploadSpeed: Math.random() * 40 + 10, // 10-50 Mbps
        ping: Math.random() * 50 + 5, // 5-55 ms
        jitter: Math.random() * 10 + 1, // 1-11 ms
        timestamp: new Date().toISOString()
      };

      setResult(testResult);
      setCurrentTest('complete');

      // Guardar en historial
      const newHistory = [testResult, ...history].slice(0, 10);
      setHistory(newHistory);
      localStorage.setItem('speedtest-history', JSON.stringify(newHistory));

    } catch (error) {
      console.error('Error en speed test:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const simulateProgress = (start: number, end: number, duration: number) => {
    return new Promise<void>((resolve) => {
      const startTime = Date.now();
      const diff = end - start;

      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const progressRatio = Math.min(elapsed / duration, 1);
        const currentProgress = start + (diff * progressRatio);
        
        setProgress(currentProgress);

        if (progressRatio < 1) {
          requestAnimationFrame(updateProgress);
        } else {
          resolve();
        }
      };

      requestAnimationFrame(updateProgress);
    });
  };

  const getSpeedColor = (speed: number, type: 'download' | 'upload') => {
    const threshold = type === 'download' ? [25, 50, 75] : [15, 30, 45];
    
    if (speed >= threshold[2]) return 'text-green-600';
    if (speed >= threshold[1]) return 'text-yellow-600';
    if (speed >= threshold[0]) return 'text-orange-600';
    return 'text-red-600';
  };

  const getPingColor = (ping: number) => {
    if (ping <= 20) return 'text-green-600';
    if (ping <= 50) return 'text-yellow-600';
    if (ping <= 100) return 'text-orange-600';
    return 'text-red-600';
  };

  const formatSpeed = (speed: number) => speed.toFixed(1);
  const formatPing = (ping: number) => Math.round(ping);

  return (
    <main className="min-h-screen pt-20 bg-secondary-50">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Test de Velocidad ARCIICloud
          </h1>
          <p className="text-xl text-primary-100 mb-8">
            Prueba la velocidad de conexión a nuestros servidores y encuentra 
            la mejor ubicación para tu proyecto.
          </p>

          {userInfo && (
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl inline-block">
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="text-primary-200">Tu IP</div>
                  <div className="font-bold">{userInfo.ip}</div>
                </div>
                <div>
                  <div className="text-primary-200">Ubicación</div>
                  <div className="font-bold">{userInfo.location}</div>
                </div>
                <div>
                  <div className="text-primary-200">Proveedor</div>
                  <div className="font-bold">{userInfo.isp}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Test Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Server Selection */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h2 className="text-xl font-bold text-secondary-900 mb-4">🌐 Seleccionar Servidor</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {servers.map((server) => (
                  <button
                    key={server.id}
                    onClick={() => setSelectedServer(server)}
                    disabled={isRunning}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedServer.id === server.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-secondary-200 hover:border-secondary-300'
                    } ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{server.flag}</span>
                        <span className="font-bold text-secondary-900">{server.name}</span>
                      </div>
                      {server.recommended && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                          Recomendado
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-secondary-600">{server.location}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Speed Test */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">
                  {!isRunning ? '⚡ Iniciar Test de Velocidad' : 
                   currentTest === 'ping' ? '📡 Midiendo Latencia...' :
                   currentTest === 'download' ? '⬇️ Midiendo Descarga...' :
                   currentTest === 'upload' ? '⬆️ Midiendo Subida...' :
                   '✅ Test Completado'}
                </h2>
                
                <p className="text-secondary-600 mb-6">
                  Servidor: <strong>{selectedServer.name}</strong> ({selectedServer.location})
                </p>

                {!isRunning && !result && (
                  <button
                    onClick={simulateSpeedTest}
                    className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors"
                  >
                    🚀 Iniciar Test
                  </button>
                )}

                {isRunning && (
                  <div className="max-w-md mx-auto">
                    <div className="bg-secondary-200 rounded-full h-4 mb-4">
                      <div
                        className="bg-primary-600 h-4 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-secondary-600">
                      Progreso: {Math.round(progress)}%
                    </div>
                  </div>
                )}

                {result && (
                  <div className="space-y-6">
                    
                    {/* Results Display */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      
                      <div className="text-center p-6 bg-blue-50 rounded-xl">
                        <div className="text-3xl mb-2">📡</div>
                        <div className={`text-3xl font-bold mb-2 ${getPingColor(result.ping)}`}>
                          {formatPing(result.ping)}
                        </div>
                        <div className="text-sm text-secondary-600">Ping (ms)</div>
                      </div>

                      <div className="text-center p-6 bg-green-50 rounded-xl">
                        <div className="text-3xl mb-2">⬇️</div>
                        <div className={`text-3xl font-bold mb-2 ${getSpeedColor(result.downloadSpeed, 'download')}`}>
                          {formatSpeed(result.downloadSpeed)}
                        </div>
                        <div className="text-sm text-secondary-600">Descarga (Mbps)</div>
                      </div>

                      <div className="text-center p-6 bg-purple-50 rounded-xl">
                        <div className="text-3xl mb-2">⬆️</div>
                        <div className={`text-3xl font-bold mb-2 ${getSpeedColor(result.uploadSpeed, 'upload')}`}>
                          {formatSpeed(result.uploadSpeed)}
                        </div>
                        <div className="text-sm text-secondary-600">Subida (Mbps)</div>
                      </div>

                      <div className="text-center p-6 bg-yellow-50 rounded-xl">
                        <div className="text-3xl mb-2">📊</div>
                        <div className="text-3xl font-bold mb-2 text-yellow-600">
                          {formatPing(result.jitter)}
                        </div>
                        <div className="text-sm text-secondary-600">Jitter (ms)</div>
                      </div>
                    </div>

                    {/* Performance Analysis */}
                    <div className="bg-secondary-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-secondary-900 mb-4">📊 Análisis de Rendimiento</h3>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span>Streaming HD (Netflix, YouTube)</span>
                          <span className={`font-semibold ${result.downloadSpeed >= 5 ? 'text-green-600' : 'text-red-600'}`}>
                            {result.downloadSpeed >= 5 ? '✅ Excelente' : '❌ Insuficiente'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Videoconferencias (Zoom, Teams)</span>
                          <span className={`font-semibold ${result.downloadSpeed >= 3 && result.uploadSpeed >= 1 ? 'text-green-600' : 'text-red-600'}`}>
                            {result.downloadSpeed >= 3 && result.uploadSpeed >= 1 ? '✅ Excelente' : '❌ Limitado'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Gaming Online</span>
                          <span className={`font-semibold ${result.ping <= 50 && result.jitter <= 5 ? 'text-green-600' : 'text-yellow-600'}`}>
                            {result.ping <= 50 && result.jitter <= 5 ? '✅ Óptimo' : '⚠️ Aceptable'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Trabajo Remoto</span>
                          <span className={`font-semibold ${result.downloadSpeed >= 10 && result.uploadSpeed >= 5 ? 'text-green-600' : 'text-yellow-600'}`}>
                            {result.downloadSpeed >= 10 && result.uploadSpeed >= 5 ? '✅ Perfecto' : '⚠️ Básico'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={simulateSpeedTest}
                        className="bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors"
                      >
                        🔄 Repetir Test
                      </button>
                      <button
                        onClick={() => {
                          const data = `Speed Test Results - ${selectedServer.name}\n` +
                                     `Date: ${new Date(result.timestamp).toLocaleString()}\n` +
                                     `Ping: ${formatPing(result.ping)} ms\n` +
                                     `Download: ${formatSpeed(result.downloadSpeed)} Mbps\n` +
                                     `Upload: ${formatSpeed(result.uploadSpeed)} Mbps\n` +
                                     `Jitter: ${formatPing(result.jitter)} ms`;
                          
                          const element = document.createElement('a');
                          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
                          element.setAttribute('download', `speedtest-${Date.now()}.txt`);
                          element.style.display = 'none';
                          document.body.appendChild(element);
                          element.click();
                          document.body.removeChild(element);
                        }}
                        className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-primary-50 transition-colors"
                      >
                        💾 Guardar Resultados
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Speed Guide */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-bold text-secondary-900 mb-4">📚 Guía de Velocidades</h3>
              
              <div className="space-y-4 text-sm">
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="font-semibold text-green-700">Excelente (&gt;50 Mbps)</div>
                  <div className="text-secondary-600">Streaming 4K, gaming, múltiples dispositivos</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-semibold text-blue-700">Buena (25-50 Mbps)</div>
                  <div className="text-secondary-600">Streaming HD, videoconferencias, trabajo remoto</div>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <div className="font-semibold text-yellow-700">Básica (10-25 Mbps)</div>
                  <div className="text-secondary-600">Navegación, email, streaming SD</div>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <div className="font-semibold text-red-700">Limitada (&lt;10 Mbps)</div>
                  <div className="text-secondary-600">Navegación básica, limitaciones</div>
                </div>
              </div>
            </div>

            {/* History */}
            {history.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-lg font-bold text-secondary-900 mb-4">📈 Historial Reciente</h3>
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {history.map((test, index) => (
                    <div key={index} className="p-3 bg-secondary-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-secondary-900 text-sm">{test.server}</div>
                        <div className="text-xs text-secondary-500">
                          {new Date(test.timestamp).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <div className="text-secondary-500">Ping</div>
                          <div className="font-semibold">{formatPing(test.ping)}ms</div>
                        </div>
                        <div>
                          <div className="text-secondary-500">Down</div>
                          <div className="font-semibold">{formatSpeed(test.downloadSpeed)} Mbps</div>
                        </div>
                        <div>
                          <div className="text-secondary-500">Up</div>
                          <div className="font-semibold">{formatSpeed(test.uploadSpeed)} Mbps</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setHistory([]);
                    localStorage.removeItem('speedtest-history');
                  }}
                  className="w-full mt-4 text-center text-sm text-secondary-600 hover:text-secondary-900 transition-colors"
                >
                  🗑️ Limpiar Historial
                </button>
              </div>
            )}

            {/* Tips */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-bold text-secondary-900 mb-4">💡 Consejos</h3>
              
              <ul className="space-y-3 text-sm text-secondary-700">
                <li className="flex items-start">
                  <span className="mr-2">🔸</span>
                  <span>Cierra otras aplicaciones que usen internet</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔸</span>
                  <span>Usa conexión por cable para mayor precisión</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔸</span>
                  <span>Realiza múltiples tests a diferentes horas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔸</span>
                  <span>El servidor más cercano suele ser más rápido</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}