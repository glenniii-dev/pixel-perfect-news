import TeamMember from "@/components/cards/TeamMember";

export default function page() {
  return (
    <section className="flex flex-row flex-wrap items-center justify-center p-10 lg:px-20 lg:py-15 text-(--oxford-blue) gap-6">
      <div className="flex flex-col mb-6 justify-start w-full">
        <h1 className="text-4xl font-bold mb-4 text-(--chambray) text-shadow-md">Our Team</h1>
        <h3 className="text-lg mb-4">Meet the passionate individuals behind Pixel Perfect. Our diverse team of students and young professionals brings together expertise in STEM research, journalism, design, and technology to create engaging and informative content.</h3>
      </div>

      <TeamMember 
        image="/profile.png" 
        name="Andy" 
        role="Founder & President" 
        bio="Andy is the founder of Pixel Perfect. He is passionate about technology, storytelling, and student collaboration, and plans to pursue **computer science** with a focus on data-driven innovation. He enjoys writing, new tech projects, and reading." 
      />

      <TeamMember 
        image="/james.png" 
        name="James" 
        role="Vice President" 
        bio="James is fascinated by the sciences, especially chemistry. He plans to study chemical engineering to work on sustainable materials and clean energy solutions. He is excited to help Pixel Perfect become a hub for curious minds. He enjoys lab work, hiking, and reading about scientific discoveries." 
      />

      <TeamMember 
        image="/bell.png" 
        name="Bell" 
        role="Secretary" 
        bio="Bell is a computer science student with a strong passion for design, combining technical knowledge with creativity to build engaging digital experiences. She focuses on visual design and user-friendly interfaces. Outside of coding, she enjoys sketching, photography, and exploring digital art." 
      />

      
    </section>
  )
}
