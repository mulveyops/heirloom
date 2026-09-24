import join from "@/content/join.json";

const JoinTeam = () => {
  return (
    <section id="join" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-2xl md:text-4xl font-migra font-bold mb-6 text-dark-text leading-tight">
              Join Our <span className="text-brand-green">Team</span>
            </h2>
            {(join.paragraphs ?? []).map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg font-body mb-6 text-dark-text leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="md:w-1/2">
            <div className="bg-soft-beige p-8 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-migra font-semibold mb-6 text-dark-text">Perks You'll Enjoy</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(join.perks ?? []).map((perk, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-brand-green mr-3">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p className="font-body text-dark-text">{perk}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="font-body text-dark-text mb-4">{join.closing}</p>
                <a
                  href={join.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-brand-green text-white font-body font-medium rounded-lg shadow-md hover:bg-opacity-90 transition-all booking-btn"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
