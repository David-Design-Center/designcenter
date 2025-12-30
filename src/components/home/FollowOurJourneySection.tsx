import { useState, useEffect, useRef } from "react";
import { Play, ArrowRight, ArrowDown } from "lucide-react";

const videoUrls = [
  "https://res.cloudinary.com/designcenter/video/upload/v1767094959/jay2ri6u9kjtbxgqg3yy.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094957/oyew0vl5ecmy6be8mkpn.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094955/du6hzgp3on2n8zpehfuu.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094955/wlak4j8gt3anjdhumfz8.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094956/og56wi5mg9e5uwtjebib.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094955/mjtknnoajili1uwqbsrk.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094955/rpkfigr4zoz9efdzqvvw.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094952/atjaumiuefej3tjqww0g.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094951/hq6iqefugxddyhz8pzxh.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094951/xoesepeqnvk4goksxhtv.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094951/lzassvvkhtv2nn8me95p.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094950/kq61g3vrmnrjzwknwahd.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094950/yulzomibc4rzs8moiqdv.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094949/z9balh6lmnsogj19kk8r.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094948/uxh7dop3f7ign8clozpn.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094948/yykuuhgxk1aypobgvpsk.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094947/dwgpbfcoc0nlmiwngr6j.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094947/synp6fdp59jvho2rakw2.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094947/litkzaaposfzbx1pyzle.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094946/zqjra5kdstszdftxguse.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094943/rrysrx5n0jnne95brvku.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094942/skublx9v9llhewl40otb.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094943/d3cdflhr1subi6qtkrxy.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094942/dbyyqd2xroneggeurncz.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094942/ta9myocagrqize5kbcmo.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094939/ui2rlgni14r6lxmfpycv.mp4",
  "https://res.cloudinary.com/designcenter/video/upload/v1767094938/yazbfsurx36xiajksxzh.mp4",
];

const SocialIcon = ({ icon, href }: { icon: string; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
    aria-label={`Follow us on ${icon}`}
  >
    <div
      className="w-full h-full"
      dangerouslySetInnerHTML={{ __html: getSocialSVG(icon) }}
    />
  </a>
);

const getSocialSVG = (icon: string): string => {
  const svgs: Record<string, string> = {
    facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="#7f7f7f"><path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/></svg>`,
    pinterest: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="#7f7f7f"><path d="M25,2C12.3178711,2,2,12.3178711,2,25c0,9.8841553,6.2675781,18.3302612,15.036377,21.5769653 c-0.2525635-2.2515869-0.2129517-5.9390259,0.2037964-7.7243652c0.3902588-1.677002,2.5212402-10.6871338,2.5212402-10.6871338 s-0.6433105-1.2883301-0.6433105-3.1911011c0-2.9901733,1.7324219-5.2211914,3.8898315-5.2211914 c1.8349609,0,2.7197876,1.3776245,2.7197876,3.0281982c0,1.8457031-1.1734619,4.6026611-1.78125,7.1578369 c-0.506897,2.1409302,1.0733643,3.8865356,3.1836548,3.8865356c3.821228,0,6.7584839-4.0296021,6.7584839-9.8453369 c0-5.147583-3.697998-8.7471924-8.9795532-8.7471924c-6.1167603,0-9.7072754,4.588562-9.7072754,9.3309937 c0,1.8473511,0.7111816,3.8286743,1.6000977,4.9069824c0.175293,0.2133179,0.2009277,0.3994141,0.1488647,0.6160278 c-0.1629028,0.678894-0.5250854,2.1392822-0.5970459,2.4385986c-0.0934448,0.3944702-0.3117676,0.4763184-0.7186279,0.2869263 c-2.685791-1.2503052-4.364502-5.1756592-4.364502-8.3295898c0-6.7815552,4.9268188-13.0108032,14.206543-13.0108032 c7.4588623,0,13.2547607,5.3138428,13.2547607,12.4179077c0,7.4100342-4.6729126,13.3729858-11.1568604,13.3729858 c-2.178894,0-4.2263794-1.132019-4.9267578-2.4691772c0,0-1.0783081,4.1048584-1.3404541,5.1112061 c-0.4524536,1.7404175-2.3892822,5.3460083-3.3615723,6.9837036C20.1704712,47.6074829,22.5397949,48,25,48 c12.6826172,0,23-10.3173828,23-23C48,12.3178711,37.6826172,2,25,2z"/></svg>`,
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="#7f7f7f"><path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/></svg>`,
    tiktok: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="#7f7f7f"><path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"/></svg>`,
  };
  return svgs[icon] || "";
};

const VideoCard = ({
  videoUrl,
  onClick,
  position,
  onHoverStart,
  onHoverEnd,
}: {
  videoUrl: string;
  onClick: () => void;
  position: number;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => {
  const isCenter = position === 0;
  const isAdjacent = Math.abs(position) === 1;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
    onHoverStart();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
    onHoverEnd();
  };

  return (
    <div
      className="absolute w-48 h-96 sm:w-56 sm:h-[420px] md:w-64 md:h-[480px] lg:w-72 lg:h-[540px] transition-all duration-500 ease-in-out flex items-center justify-center"
      style={{
        transform: `
          translateX(${position * 45}%) 
          scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
          rotateY(${position * -10}deg)
        `,
        zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
        opacity: isCenter ? 1 : isAdjacent ? 0.5 : 0,
        filter: isCenter ? "blur(0px)" : "blur(1px)",
        visibility: Math.abs(position) > 1 ? "hidden" : "visible",
      }}
    >
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Video background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Play button centered - hide when playing */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 group-hover:scale-110">
            <Play className="w-8 h-8 lg:w-10 lg:h-10 text-gray-800 ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FollowOurJourneySection = () => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(videoUrls.length / 2));
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate videos every 5 seconds (pause when hovering)
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering]);

  const handleVideoClick = (videoUrl: string) => {
    // Open video in a new window/tab
    window.open(videoUrl, "_blank");
  };

  return (
    <section className="relative bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text and Social */}
          <div className="lg:col-span-5 flex flex-col justify-between min-h-0 lg:min-h-[600px] text-center lg:text-left">
            {/* Top Content - Headings */}
            <div className="space-y-6 lg:space-y-8">
              {/* Main Heading */}
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight">
                  FOLLOW OUR JOURNEY
                </h2>
              </div>

              {/* Subtitle */}
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900">
                  Recent Projects and
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 inline-flex items-center gap-3">
                  showcases
                  <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-900 lg:hidden" />
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-900 hidden lg:inline-flex" />
                </p>
              </div>
            </div>

            {/* Bottom Content - Social Icons and Caption */}
            <div className="space-y-6 mt-8 lg:mt-0">
              {/* Social Icons */}
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <SocialIcon
                  icon="facebook"
                  href="https://www.facebook.com/david.vaitzman"
                />
                <SocialIcon
                  icon="pinterest"
                  href="https://www.pinterest.com/dnddesigncenternyc"
                />
                <SocialIcon
                  icon="instagram"
                  href="https://www.instagram.com/dnddesigncenter.nyc"
                />
                <SocialIcon
                  icon="tiktok"
                  href="https://www.tiktok.com/@dnddesigncenter.nyc"
                />
              </div>

              {/* Caption */}
              <div className="text-center lg:text-left">
                <p className="text-[#B49157] text-sm md:text-base font-light">
                  Viewed by over 100,000 design enthusiasts worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Video Carousel */}
          <div className="lg:col-span-7 relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] flex items-center justify-center [perspective:1000px] mt-8 lg:mt-0">
            {videoUrls.map((videoUrl, index) => {
              const offset = index - currentIndex;
              const total = videoUrls.length;
              let pos = (offset + total) % total;
              if (pos > Math.floor(total / 2)) {
                pos = pos - total;
              }

              return (
                <VideoCard
                  key={index}
                  videoUrl={videoUrl}
                  onClick={() => handleVideoClick(videoUrl)}
                  position={pos}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowOurJourneySection;
