
const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Graphic Designer",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "Marketing Manager",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
    },
    {
      id: 4,
      name: "Peter Johnson",
      role: "SEO Specialist",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
    },
    {
      id: 5,
      name: "Emily Brown",
      role: "UX Designer",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
    },
    {
      id: 6,
      name: "Michael Davis",
      role: "Frontend Developer",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
    },
    {
      id: 7,
      name: "Sarah Johnson",
      role: "Content Writer",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
    },
    {
      id: 8,
      name: "David Wilson",
      role: "Project Manager",
      image: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
    },
  ];

  return (
    <section id="our-team" className="bg-gray-100 py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md p-6 my-6 text-center"
            >
              <img
                src={member.image}
                alt={`${member.name}`}
                className="w-full rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-700">Role: {member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
