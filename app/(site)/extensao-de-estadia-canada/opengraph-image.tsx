import { ImageResponse } from 'next/og';

export const alt = 'Vow Vistos: extensão de estadia no Canadá como visitante ou estudante';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      // Brand colours (dark → primary). No photo: keeps the PNG small enough for WhatsApp previews.
      <div style={{ width: '100%', height: '100%', display: 'flex', backgroundImage: 'linear-gradient(135deg, #0d1b2a, #1a3a6b)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px', color: 'white', borderLeft: '16px solid #facc15' }}>
          <div style={{ display: 'flex', fontSize: 26, fontWeight: 700, letterSpacing: 4, color: '#facc15', textTransform: 'uppercase', marginBottom: 24 }}>
            Para brasileiros no Canadá
          </div>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 800, lineHeight: 1.1, marginBottom: 28 }}>
            Precisa ficar mais tempo no Canadá?
          </div>
          <div style={{ display: 'flex', fontSize: 34, color: 'rgba(255,255,255,0.85)', marginBottom: 48 }}>
            Extensão de estadia como visitante ou estudante
          </div>
          <div style={{ display: 'flex', fontSize: 28, fontWeight: 700 }}>
            Vow Vistos · 100% online, em português
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
