// --- CÓDIGO MAESTRO PARA APP.JS ---
const { useState, useEffect } = React;

function TravelApp() {
  const [trips, setTrips] = useState(() => {
    const saved = localStorage.getItem("ELITE_TRAVELS");
    return saved ? JSON.parse(saved) : [];
  });
  const [screen, setScreen] = useState(trips.length > 0 ? "dashboard" : "welcome");

  useEffect(() => {
    localStorage.setItem("ELITE_TRAVELS", JSON.stringify(trips));
  }, [trips]);

  const T = {
    gold: "#B45309",
    bg: "#FAF9F6",
    bgCard: "#FFFFFF",
    ink: "#1A1714",
    inkMuted: "#7C746B",
    border: "#E5E1DA"
  };

  if (screen === "welcome") {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: T.bg, textAlign: 'center', padding: 20 }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'serif', color: T.ink }}>Travel Planner <span style={{color: T.gold}}>Elite</span></h1>
        <p style={{ color: T.inkMuted, maxWidth: 400 }}>Tu organizador de viajes inteligente con IA, mapas y presupuesto.</p>
        <button 
          onClick={() => setScreen("dashboard")}
          style={{ background: T.gold, color: 'white', border: 'none', padding: '15px 30px', borderRadius: 50, fontSize: 18, fontWeight: 'bold', marginTop: 20, cursor: 'pointer' }}
        >
          Empezar Viaje →
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, background: T.bg, minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
        <h2 style={{ margin: 0, color: T.ink }}>Mis Aventuras</h2>
        <button onClick={() => window.print()} style={{ background: 'white', border: `1px solid ${T.border}`, padding: '8px 15px', borderRadius: 10 }}>🖨️ Exportar</button>
      </header>

      <div style={{ background: T.bgCard, padding: 20, borderRadius: 20, border: `1px solid ${T.border}`, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <h3 style={{ color: T.gold }}>📍 Itinerario Visual</h3>
        <p style={{ color: T.inkMuted }}>Día 1: Llegada al destino</p>
        <div style={{ height: 8, background: '#eee', borderRadius: 4, margin: '10px 0' }}>
          <div style={{ width: '30%', height: '100%', background: T.gold, borderRadius: 4 }}></div>
        </div>
        <small>Presupuesto: 30% gastado</small>
      </div>
      
      <div style={{ marginTop: 20, height: 200, background: '#e0dfdb', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px dashed ${T.gold}` }}>
        <span style={{ color: T.gold, fontWeight: 'bold' }}>🗺️ Google Maps Activo</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TravelApp />);
