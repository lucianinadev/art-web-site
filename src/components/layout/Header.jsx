import Button from "../common/Button";

export default function Header() {
  return (
    <section>
      <div class="bg-black text-white py-20">
        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div class="p-8  mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/2  justify-center">
            <img
              class="inline-block p-8 md:p-0 rounded-full "
              src="https://img.freepik.com/free-vector/curly-hair-concept-illustration_114360-7633.jpg"
            />
          </div>
          <div class="flex flex-col w-full lg:w-1/2 justify-center items-start p-8">
            <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
            About Me
            </h2>
            <p class="text-sm md:text-base text-gray-50 mb-4">
            I'm KorgiKandi and I've been a graphic designer since 2012. I’ve worked for both in-house and freelance clients including nationally recognized magazines, book publishers and e-commerce businesses. Now I specialize in designing cute, cartoon style emotes, badges and logos for streamers on Twitch & Youtube. I’ve designed well over 2,000 emotes and chat badges combined over the last 5 years and I always look forward to doing more! If you’re ready to work with a reliable, experienced Twitch emote designer, get in touch!
            </p>
            <Button />
          </div>
          
        </div>
      </div>
    </section>
  );
}
