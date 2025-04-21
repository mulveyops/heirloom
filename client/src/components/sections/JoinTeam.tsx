import { perks } from "@/data/perks";

const JoinTeam = () => {
  return (
    <section id="join" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-2xl md:text-4xl font-migra font-bold mb-6 text-dark-text leading-tight">
              Join Our <span className="text-brand-green">Team</span>
            </h2>
            <p className="text-base md:text-lg font-body mb-6 text-dark-text leading-relaxed">
              We are passionate about teamwork, collaboration, balance, & creating a positive and welcoming environment. Our stylists values are detail oriented, like-minded, produce quality over quantity, & uplift one another.
            </p>
            <p className="text-base md:text-lg font-body mb-6 text-dark-text leading-relaxed">
              We truly believe you are who you surround yourself with & there's no holding back. Our booth rental structure is not like one that exists in Milwaukee currently. We believe that even the best stylists deserve a day off to not only rest & recharge, but also to work ON your business. We offer 4 day, 3 day, & 2 day rental positions.
            </p>
            <p className="text-base md:text-lg font-body mb-6 text-dark-text leading-relaxed">
              Ready to take the next step in your career? Our associate program allows you full access to hands-on opportunities to take your skills to the next level. Working side by side with our owner Kalie and our top stylists, you'll receive both business and technical skill mentorship, client building opportunities and more all while building your books!
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-soft-beige p-8 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-migra font-semibold mb-6 text-dark-text">Perks You'll Enjoy</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-brand-green mr-3">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p className="font-body text-dark-text">{perk}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="font-body text-dark-text mb-4">We are looking forward to hearing from you!</p>
                <a 
                  href="https://form.jotform.com/251034796865063" 
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
