import { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import { places } from '../data/places';
import PlaceCard from '../components/cards/PlaceCard';
import PlaceDetailModal from '../components/modals/PlaceDetailModal';

/**
 * Page des événements et expositions temporaires
 */
const EventsPage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Expositions temporaires actuelles
  const temporaryExhibitions = places.filter(p => p.temporary);

  // Événements à venir (mockés)
  const upcomingEvents = [
    {
      id: 101,
      title: "Nuit des musées 2026",
      date: "18 Mai 2026",
      location: "France entière",
      description: "Entrée gratuite dans plus de 3000 musées et monuments",
      type: "Événement national"
    },
    {
      id: 102,
      title: "Journées du Patrimoine",
      date: "20-21 Septembre 2026",
      location: "France entière",
      description: "Accès exceptionnel à des lieux habituellement fermés au public",
      type: "Événement national"
    },
    {
      id: 103,
      title: "Exposition Léonard de Vinci",
      date: "À partir du 1er Juin 2026",
      location: "Château d'Amboise",
      description: "500 ans d'héritage : machines, dessins et innovations",
      type: "Exposition"
    },
    {
      id: 104,
      title: "Festival des Jardins de Chaumont",
      date: "Avril - Novembre 2026",
      location: "Domaine de Chaumont-sur-Loire",
      description: "Édition spéciale : Jardins du futur",
      type: "Festival"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-stone-900/50 border-b border-stone-800/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <Calendar className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-white">
                Événements & Expositions
              </h1>
              <p className="text-stone-400">
                Découvrez les expositions temporaires et événements culturels
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Expositions en cours */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-500 rounded-full" />
            Expositions en cours
          </h2>

          {temporaryExhibitions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {temporaryExhibitions.map((place) => (
                <PlaceCard
                  key={place.id}
                  place={place}
                  onClick={setSelectedPlace}
                />
              ))}
            </div>
          ) : (
            <p className="text-stone-400 text-center py-8">
              Aucune exposition temporaire en ce moment.
            </p>
          )}
        </section>

        {/* Événements à venir */}
        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#e07a5f] rounded-full" />
            À venir
          </h2>

          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <article
                key={event.id}
                className="
                  group
                  flex flex-col sm:flex-row sm:items-center
                  gap-4
                  p-5
                  bg-stone-800/30
                  border border-stone-700/30
                  rounded-2xl
                  hover:border-[#e07a5f]/30
                  hover:bg-stone-800/50
                  transition-all duration-300
                  cursor-pointer
                "
              >
                {/* Date badge */}
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="p-3 bg-[#e07a5f]/20 rounded-xl">
                    <Calendar className="w-6 h-6 text-[#e07a5f] mx-auto mb-1" />
                    <p className="text-xs text-[#e07a5f] font-medium">{event.date}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 text-xs bg-stone-700/50 text-stone-300 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-1 group-hover:text-[#e07a5f] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-stone-400 text-sm mb-2 line-clamp-1">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-stone-500">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 hidden sm:block">
                  <ChevronRight className="w-5 h-5 text-stone-600 group-hover:text-[#e07a5f] group-hover:translate-x-1 transition-all" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-12 p-8 bg-gradient-to-r from-purple-900/20 to-[#e07a5f]/20/20 border border-purple-700/30 rounded-2xl text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Ne manquez rien
          </h3>
          <p className="text-stone-400 mb-6 max-w-md mx-auto">
            Recevez les dernières actualités culturelles et événements directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="
                flex-1
                px-4 py-3
                bg-stone-800/50
                border border-stone-700/50
                rounded-xl
                text-white
                placeholder-stone-500
                focus:outline-none
                focus:border-[#e07a5f]/50
              "
            />
            <button className="
              px-6 py-3
              bg-gradient-to-r from-[#e07a5f] to-[#d86a4f]
              text-white font-medium
              rounded-xl
              shadow-lg shadow-[#e07a5f]/30
              hover:from-[#e8968a] hover:to-[#e07a5f]
              transition-all
            ">
              S'inscrire
            </button>
          </div>
        </section>
      </div>

      {/* Detail Modal */}
      <PlaceDetailModal
        place={selectedPlace}
        isOpen={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
};

export default EventsPage;
