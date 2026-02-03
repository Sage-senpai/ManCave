import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { ArrowRight, Trophy, Rocket, Users, BookOpen, Code, Sparkles, TrendingUp, MessageSquare, Target, Award, Zap, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  // Community event images with descriptions
  const communityEvents = [
    {
      image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMG1lZXR1cCUyMHBlb3BsZXxlbnwxfHx8fDE3NzAwOTg1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Global Web3 Summit 2025',
      description: 'Annual gathering of Mandala builders',
    },
    {
      image: 'https://images.unsplash.com/photo-1694279901445-2007392c4bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY29tbXVuaXR5JTIwZXZlbnR8ZW58MXx8fHwxNzcwMDk4NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Blockchain Developer Workshop',
      description: 'Hands-on Substrate development session',
    },
    {
      image: 'https://images.unsplash.com/photo-1766766464419-ea9d60543aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwbmV0d29ya2luZyUyMGV2ZW50fGVufDF8fHx8MTc3MDA1NjM3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Polkadot Meetup Berlin',
      description: 'Networking with parachain developers',
    },
    {
      image: 'https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcwMDk4NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Mandala Coding Bootcamp',
      description: 'Intensive 4-week development program',
    },
    {
      image: 'https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBtZWV0dXAlMjBncm91cHxlbnwxfHx8fDE3NzAwOTg1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Local Developer Meetup',
      description: 'Monthly community gathering',
    },
    {
      image: 'https://images.unsplash.com/photo-1638202677704-b74690bb8fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaGFja2F0aG9uJTIwdGVhbXxlbnwxfHx8fDE3NzAwOTg1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Mandala Hackathon Finals',
      description: 'Building the future of Web3',
    },
  ];

  // Testimonials from community members
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Developer Ambassador',
      avatar: 'SC',
      text: 'Mancave transformed my understanding of Web3. The structured quests made learning Substrate development intuitive and fun!',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'Graduate Student',
      avatar: 'MJ',
      text: 'The mentorship and community support here is unmatched. I went from zero blockchain knowledge to deploying my first parachain in 3 months.',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Content Creator',
      avatar: 'ER',
      text: 'As a creator, the Mandala ecosystem gave me the tools and audience to share my blockchain education content. Amazing platform!',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Core Contributor',
      avatar: 'DP',
      text: 'Mandala Chain represents the future of identity and interoperability. Mancave makes it accessible to everyone.',
      rating: 5,
    },
    {
      name: 'Amara Okafor',
      role: 'Ecosystem Developer',
      avatar: 'AO',
      text: 'The gamified learning approach kept me engaged throughout. The XP and badge system is genuinely motivating!',
      rating: 5,
    },
    {
      name: 'Liam Foster',
      role: 'Former Student',
      avatar: 'LF',
      text: 'From complete beginner to contributing to Polkadot projects - Mancave was my launchpad into Web3 development.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Superteam Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-6">
                <div className="flex items-center gap-2 bg-[#0AF3FF]/10 border border-[#0AF3FF]/30 rounded-full px-4 py-2">
                  <Sparkles className="w-4 h-4 text-[#0AF3FF]" />
                  <span className="text-[#0AF3FF] text-sm font-medium">Web3 Education • Mandala Chain</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Master Web3
                <br />
                <span className="bg-gradient-to-r from-[#0AF3FF] to-[#0880FF] bg-clip-text text-transparent">
                  Build the Future
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join Mancave, the premier Web3 onboarding platform for Mandala Chain. 
                Learn blockchain development, complete quests, earn rewards, and connect with a global community of builders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90 text-lg px-8 py-6 font-semibold group"
                  onClick={() => onNavigate('onboarding')}
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#0AF3FF]/50 text-white hover:bg-[#0AF3FF]/10 text-lg px-8 py-6"
                  onClick={() => onNavigate('knowledge')}
                >
                  Explore Resources
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '12.5K+', label: 'Active Learners' },
                  { value: '450+', label: 'Quests Completed' },
                  { value: '2.8M', label: 'XP Earned' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#0AF3FF]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Mandala Chain Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0AF3FF] to-[#0880FF] rounded-full blur-3xl opacity-30 animate-pulse" />
                
                {/* Mandala Chain Logo */}
                <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-[#0AF3FF] via-[#0880FF] to-[#06B6D4] flex items-center justify-center shadow-2xl shadow-[#0AF3FF]/50 border-4 border-white/10">
                  {/* Mandala Pattern - Geometric circles */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                      {/* Outer ring */}
                      <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                      <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                      <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                      
                      {/* Inner patterns */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                        <g key={i} transform={`rotate(${angle} 200 200)`}>
                          <circle cx="200" cy="80" r="20" fill="rgba(255,255,255,0.2)" />
                          <circle cx="200" cy="120" r="15" fill="rgba(255,255,255,0.15)" />
                          <line x1="200" y1="100" x2="200" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                        </g>
                      ))}
                      
                      {/* Center circle */}
                      <circle cx="200" cy="200" r="60" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    </svg>
                  </div>
                  
                  {/* Logo text */}
                  <div className="relative z-10 text-center">
                    <div className="text-8xl font-bold text-white mb-2">M</div>
                    <div className="text-2xl font-semibold text-white tracking-wider">MANDALA</div>
                    <div className="text-sm text-white/80 tracking-widest">CHAIN</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flowing Community Events Gallery - Left to Right */}
      <section className="py-16 bg-[#0a0a0a] overflow-hidden">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our <span className="text-[#0AF3FF]">Community</span> in Action
          </h2>
          <p className="text-gray-400">Events, meetups, and moments that shape our ecosystem</p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="flex gap-6 animate-scroll-left">
            {[...communityEvents, ...communityEvents].map((event, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-[#0AF3FF]/20 bg-black">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-300">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flowing Testimonials - Right to Left */}
      <section className="py-16 overflow-hidden">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What Our <span className="text-[#0AF3FF]">Community</span> Says
          </h2>
          <p className="text-gray-400">Hear from students, ambassadors, and builders</p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="flex gap-6 animate-scroll-right">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-96"
              >
                <div className="bg-[#0a0a0a] border border-[#0AF3FF]/20 rounded-2xl p-6 hover:border-[#0AF3FF]/50 transition-all h-full">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#0AF3FF] text-[#0AF3FF]" />
                    ))}
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center">
                      <span className="text-black font-bold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tracks Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialize in Development or Content Creation. Each track is designed to take you from beginner to expert.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Code,
                title: 'Developer Track',
                description: 'Master Substrate development, smart contracts, and parachain architecture',
                gradient: 'from-[#0AF3FF] to-[#0880FF]',
                stats: ['25+ Quests', '15,000 XP', '5 NFT Badges'],
                features: ['Solidity & Ink!', 'Runtime Development', 'Cross-chain Integration', 'Security Best Practices'],
              },
              {
                icon: Sparkles,
                title: 'Creator Track',
                description: 'Build engaging content, documentation, and educational materials for the ecosystem',
                gradient: 'from-purple-500 to-pink-500',
                stats: ['20+ Quests', '12,000 XP', '4 NFT Badges'],
                features: ['Technical Writing', 'Video Production', 'Community Management', 'Developer Advocacy'],
              },
            ].map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-black border border-[#0AF3FF]/20 rounded-2xl p-8 hover:border-[#0AF3FF]/50 transition-all group cursor-pointer"
                onClick={() => onNavigate('onboarding')}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <track.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {track.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {track.description}
                </p>
                
                <div className="flex gap-4 mb-6">
                  {track.stats.map((stat, i) => (
                    <div key={i} className="bg-white/5 rounded-lg px-3 py-2">
                      <span className="text-sm text-gray-300">{stat}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 mb-6">
                  {track.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <Zap className="w-4 h-4 text-[#0AF3FF]" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button
                  className={`w-full bg-gradient-to-r ${track.gradient} text-white font-semibold group-hover:shadow-lg transition-all`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('onboarding');
                  }}
                >
                  Start Track
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your journey from Web3 novice to expert in four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: Rocket,
                title: 'Connect Wallet',
                description: 'Link your Polkadot wallet and create your learning profile',
              },
              {
                step: '02',
                icon: Target,
                title: 'Choose Track',
                description: 'Select Developer or Creator path based on your interests',
              },
              {
                step: '03',
                icon: BookOpen,
                title: 'Complete Quests',
                description: 'Learn through interactive challenges and earn XP + rewards',
              },
              {
                step: '04',
                icon: Award,
                title: 'Level Up',
                description: 'Unlock badges, climb leaderboards, and join the community',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#0AF3FF]/20 mb-4">
                    {step.step}
                  </div>
                  
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#0AF3FF]/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join a Thriving
                <br />
                <span className="text-[#0AF3FF]">Global Community</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-8">
                Connect with fellow builders, mentors, and Web3 enthusiasts. 
                Get real-time support, share knowledge, and collaborate on projects.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: MessageSquare,
                    title: 'Live Mentor Chat',
                    description: 'Get instant help from experienced developers and creators',
                  },
                  {
                    icon: Users,
                    title: 'Study Groups',
                    description: 'Join cohorts and learn together with peers at your level',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Leaderboards',
                    description: 'Compete globally and showcase your achievements',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0AF3FF]/10 border border-[#0AF3FF]/30 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[#0AF3FF]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Button
                size="lg"
                variant="outline"
                className="border-[#0AF3FF] text-[#0AF3FF] hover:bg-[#0AF3FF] hover:text-black"
                onClick={() => onNavigate('chat')}
              >
                Join Community Chat
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-[#0AF3FF]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559223607-b0f2c487d937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaCUyMGNvbW11bml0eSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcwMDk3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Community Collaboration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0AF3FF]/10 via-black to-black" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBBRjNGRiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Start Your
              <br />
              <span className="text-[#0AF3FF]">Web3 Journey?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of learners already building on Mandala Chain. 
              Start earning XP, collecting badges, and mastering Web3 today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90 text-lg px-10 py-7 font-semibold group"
                onClick={() => onNavigate('onboarding')}
              >
                Get Started for Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-10 py-7"
                onClick={() => onNavigate('quests')}
              >
                Explore Quests
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#0AF3FF]/20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center">
                  <span className="text-black font-bold">M</span>
                </div>
                <span className="text-white font-bold text-xl">Mancave</span>
              </div>
              <p className="text-gray-400 text-sm">
                Web3 education platform for Mandala Chain ecosystem
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><button onClick={() => onNavigate('quests')} className="text-gray-400 hover:text-[#0AF3FF] text-sm">Quests</button></li>
                <li><button onClick={() => onNavigate('knowledge')} className="text-gray-400 hover:text-[#0AF3FF] text-sm">Knowledge Hub</button></li>
                <li><button onClick={() => onNavigate('dashboard')} className="text-gray-400 hover:text-[#0AF3FF] text-sm">Dashboard</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="https://mandalachain.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0AF3FF] text-sm">Mandala Chain</a></li>
                <li><a href="https://polkadot.network" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0AF3FF] text-sm">Polkadot</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#0AF3FF] text-sm">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><button onClick={() => onNavigate('chat')} className="text-gray-400 hover:text-[#0AF3FF] text-sm">Discord</button></li>
                <li><a href="#" className="text-gray-400 hover:text-[#0AF3FF] text-sm">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#0AF3FF] text-sm">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#0AF3FF]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Mancave. Powered by Mandala Chain.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#0AF3FF] text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-[#0AF3FF] text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-[#0AF3FF] text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}