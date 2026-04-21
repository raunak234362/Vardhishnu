
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const DonateNow = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container-custom relative z-10 text-center"
      >
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-inner">
            <Heart size={48} className="fill-current" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-dark tracking-tighter mb-6">
          Donate <span className="text-primary">Now</span>
        </h1>
        
        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-10" />
        
        <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
          Thank you for your interest in supporting our mission. <br/>
          This donation page is currently under development.
        </p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 inline-flex flex-col items-center gap-4 py-8 px-12 bg-white rounded-3xl shadow-2xl shadow-primary/5 border border-primary/10"
        >
          <span className="text-dark font-bold text-lg">Ways to contribute:</span>
          <div className="flex gap-8 text-primary font-bold">
            <span>Volunteer</span>
            <span className="text-gray-300">|</span>
            <span>Partner</span>
            <span className="text-gray-300">|</span>
            <span>Support</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DonateNow;
