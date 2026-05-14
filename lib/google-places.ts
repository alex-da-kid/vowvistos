export interface PlaceReview {
  name: string;
  date: string;
  text: string;
  color: string;
}

export interface PlaceData {
  rating: string;
  reviewCount: number;
  reviews: PlaceReview[];
  mapsUrl: string;
}

const AVATAR_COLORS = [
  'bg-blue-500', 'bg-green-500', 'bg-purple-500',
  'bg-red-500', 'bg-yellow-500', 'bg-indigo-500',
  'bg-pink-500', 'bg-teal-500',
];

function avatarColor(name: string): string {
  return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
}

const FALLBACK_REVIEWS: PlaceReview[] = [
  { name: 'Maria S.',    date: 'março de 2025',     color: 'bg-blue-500',   text: 'Atendimento incrível! Me ajudaram com todo o processo do visto americano, desde a documentação até a simulação da entrevista. Aprovada na primeira tentativa!' },
  { name: 'João P.',     date: 'fevereiro de 2025', color: 'bg-green-500',  text: 'Super profissionais. Já tinha tentado sozinho e levei negativa. Com a Vow Vistos aprovei em menos de 30 dias. A Garantia Vitalícia foi o que me convenceu a contratar.' },
  { name: 'Ana C.',      date: 'janeiro de 2025',   color: 'bg-purple-500', text: 'O suporte foi excelente do início ao fim. Explicaram tudo com clareza, me prepararam muito bem para a entrevista e o visto saiu sem nenhum problema.' },
  { name: 'Carlos M.',   date: 'dezembro de 2024',  color: 'bg-red-500',    text: 'Visto canadense aprovado! A equipe da Vow Vistos é muito atenciosa e competente. Responderam todas as minhas dúvidas rapidamente. Recomendo muito!' },
  { name: 'Fernanda L.', date: 'novembro de 2024',  color: 'bg-yellow-500', text: 'Contratei para o visto americano após duas negativas anteriores. Com o trabalho deles entendi exatamente onde estava errando. Aprovada! Não tenho palavras para agradecer.' },
  { name: 'Ricardo T.',  date: 'outubro de 2024',   color: 'bg-indigo-500', text: 'Processo todo muito bem conduzido. A simulação de entrevista foi decisiva: cheguei ao consulado muito mais confiante. Vale cada centavo investido.' },
];

export async function getGooglePlacesData(): Promise<PlaceData> {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const mapsUrl = placeId ? `https://search.google.com/local/reviews?placeid=${placeId}` : '';

  if (!placeId || !apiKey) {
    return { rating: '5.0', reviewCount: 151, reviews: FALLBACK_REVIEWS, mapsUrl };
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) return { rating: '5.0', reviewCount: 151, reviews: FALLBACK_REVIEWS, mapsUrl };

    const data = await res.json();

    const reviews: PlaceReview[] = (data.reviews ?? []).slice(0, 6).map((r: any) => ({
      name: r.authorAttribution?.displayName ?? 'Cliente',
      date: r.relativePublishTimeDescription ?? '',
      text: r.text?.text ?? '',
      color: avatarColor(r.authorAttribution?.displayName ?? 'C'),
    }));

    return {
      rating: (data.rating ?? 5.0).toFixed(1),
      reviewCount: data.userRatingCount ?? 151,
      reviews: reviews.length > 0 ? reviews : FALLBACK_REVIEWS,
      mapsUrl,
    };
  } catch {
    return { rating: '5.0', reviewCount: 151, reviews: FALLBACK_REVIEWS, mapsUrl };
  }
}
