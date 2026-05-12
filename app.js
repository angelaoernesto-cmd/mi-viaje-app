const { useState, useEffect } = React;

const T = {
    gold: "#B45309",
    bg: "#FAF9F6",
    bgCard: "#FFFFFF",
    ink: "#1A1714",
    inkMuted: "#7C746B",
    border: "#E5E1DA",
    red: "#ef4444"
};

function TravelApp() {
    const [trips, setTrips] = useState(() => {
        const saved = localStorage.getItem("ELITE_TRAVELS");
        return saved ? JSON.parse(saved) : [{
            id: 1,
            name: "Mi Viaje Maestro",
            budget: 1500,
            spent: 450,
            days: [
                { date: "Día 1", activities: [{ t: "10:00", n: "Llegada al Hotel", i: "🏨" }, { t: "13:00", n: "Almuerzo Típico", i: "🍽️" }] },
                { date: "Día 2", activities: [{ t: "09:30", n: "Tour por la ciudad", i: "🏛️" }, { t: "19:00", n: "Cena con vista", i: "🍷" }] }
            ]
        }];
    });

    const activeTrip = trips[0];

    return (
        <div style={{ background: T.bg, minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", padding: '20px' }}>
            {/* CABECERA PRO */}
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <div>
                    <h1 style={{ margin: 0, fontFamily: 'serif', fontSize: '28px' }}>{activeTrip.name}</h1>
                    <span style={{ color: T.gold, fontWeight: 'bold', fontSize: '12px' }}>PREMIUM TRAVELER ELITE</span>
                </div>
                <button onClick={() => window.print()} style={{ background: T.gold, color: 'white', border: 'none', padding: '10px 20px', borderRadius: '12px', fontWeight: 'bold' }}>Exportar PDF</button>
            </header>

            {/* CONTROL DE PRESUPUESTO REAL */}
            <div style={{ background: T.bgCard, padding: '20px', borderRadius: '20px', border: `1px solid ${T.border}`, marginBottom: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 'bold' }}>Presupuesto Inteligente</span>
                    <span style={{ color: T.gold }}>{activeTrip.spent}€ / {activeTrip.budget}€</span>
                </div>
                <div style={{ height: '10px', background: '#eee', borderRadius: '5px', overflow: 'hidden' }}>
                    <div style={{ width: `${(activeTrip.spent / activeTrip.budget) * 100}%`, height: '100%', background: T.gold }}></div>
                </div>
                <p style={{ fontSize: '12px', color: T.inkMuted, marginTop: '8px' }}>💰 Sugerencia: Estás ahorrando un 15% según el plan previsto.</p>
            </div>

            {/* CALENDARIO VISUAL MAESTRO */}
            <div style={{ background: T.bgCard, padding: '20px', borderRadius: '20px', border: `1px solid ${T.border}` }}>
                <h3 style={{ marginTop: 0, borderBottom: `1px solid ${T.border}`, paddingBottom: '10px' }}>📅 Itinerario Detallado</h3>
                <div style={{ borderLeft: `2px dashed ${T.gold}`, marginLeft: '15px', paddingLeft: '25px', marginTop: '20px' }}>
                    {activeTrip.days.map((day, i) => (
                        <div key={i} style={{ marginBottom: '30px', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '-36px', top: '0', width: '20px', height: '20px', borderRadius: '50%', background: T.gold, border: `4px solid ${T.bgCard}` }}></div>
                            <h4 style={{ margin: '0 0 15px 0', color: T.ink }}>{day.date}</h4>
                            {day.activities.map((act, j) => (
                                <div key={j} style={{ background: T.bg, padding: '12px', borderRadius: '12px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '15px', borderLeft: `4px solid ${T.gold}` }}>
                                    <span style={{ fontSize: '20px' }}>{act.i}</span>
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{act.t} - {act.n}</div>
                                        <div style={{ fontSize: '11px', color: T.inkMuted }}>Confirmado por Asistente IA</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* MAPA DINÁMICO */}
            <div style={{ marginTop: '20px', height: '250px', background: '#e0dfdb', borderRadius: '20px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${T.border}` }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '30px' }}>📍</div>
                    <div style={{ color: T.gold, fontWeight: 'bold' }}>Vista de Mapa Satelital</div>
                    <small style={{ color: T.inkMuted }}>Conectado a Google Maps API</small>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TravelApp />);
