import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Activity, Clock, FileText, AlertTriangle, 
  Users, TrendingUp, DollarSign, Smartphone, CheckCircle,
  Monitor, Loader, Server, Shield, MousePointer2, ChevronDown, 
  Zap, Calendar, BarChart3
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { BPMNPlaceholder } from '../components/BPMNPlaceholder';
import { ProcessSteps } from '../components/ProcessSteps';
import { AS_IS_STEPS, PAIN_POINTS, INNOVATIONS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BenefitsChart = () => {
  const data = [
    { name: 'Wait Time (min)', manual: 60, automated: 10 },
    { name: 'Errors (%)', manual: 25, automated: 2 },
    { name: 'Cost (Idx)', manual: 100, automated: 30 },
  ];

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b', fontWeight: 500}} dy={10} />
          <YAxis hide />
          <Tooltip 
            cursor={{fill: '#f1f5f9'}}
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
          />
          <Bar dataKey="manual" name="Before (Manual)" fill="#94a3b8" radius={[6, 6, 0, 0]} barSize={50} />
          <Bar dataKey="automated" name="After (Automated)" fill="#0d9488" radius={[6, 6, 0, 0]} barSize={50} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-8 mt-6 text-sm font-medium">
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
            <span className="text-slate-500">Manual Process</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
            <span className="text-teal-700">Automated System</span>
        </div>
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="bg-white">
      
      {/* 1. Hero Section: The Vision */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2500')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-teal-900/80 to-slate-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 fade-in-up">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-sm font-semibold mb-8 backdrop-blur-md">
              <Zap size={16} className="text-yellow-400 fill-yellow-400" />
              <span>Next Gen Healthcare Operations</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
             Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Patient Care</span> <br/>
             Through Innovation.
           </h1>
           
           <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
             Moving from manual bottlenecks to a seamless, automated digital ecosystem. 
             Experience the future of City Care Hospital.
           </p>

           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link to="/booking">
               <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl shadow-teal-500/20">
                 Try Live Demo
                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
               </Button>
             </Link>
             <Button 
               variant="outline" 
               size="lg" 
               className="w-full sm:w-auto text-lg px-8 py-4 border-slate-600 text-slate-300 hover:bg-white/5 hover:text-white hover:border-white"
               onClick={() => document.getElementById('reality')?.scrollIntoView({behavior: 'smooth'})}
             >
               Explore the Journey
             </Button>
           </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* 2. The Current Reality (Problem) */}
      <section id="reality" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm">The Challenge</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Why Change is Necessary</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              The traditional manual process is failing our patients and staff.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20 fade-in-up delay-100">
             <Card className="border-t-4 border-t-red-500 hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-6">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Critical Delays</h3>
                <p className="text-slate-600 leading-relaxed">
                  Patients wait an average of <span className="font-bold text-red-600">45 minutes</span> just to register, causing waiting room congestion and high stress levels.
                </p>
             </Card>
             <Card className="border-t-4 border-t-orange-500 hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                  <FileText size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Paperwork Overload</h3>
                <p className="text-slate-600 leading-relaxed">
                  Redundant data entry across multiple physical forms leads to a <span className="font-bold text-orange-600">12% error rate</span> in patient records.
                </p>
             </Card>
             <Card className="border-t-4 border-t-slate-500 hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 mb-6">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Resource Drain</h3>
                <p className="text-slate-600 leading-relaxed">
                  Staff spend <span className="font-bold text-slate-800">60% of their time</span> on administrative tasks instead of patient care.
                </p>
             </Card>
          </div>

          {/* AS-IS Visualization */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 fade-in-up delay-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-sm">1</span>
                  The Manual Workflow (AS-IS)
                </h3>
                <p className="text-slate-600 mb-8">
                  A visual representation of the current fragmented journey a patient must endure. Note the multiple manual touchpoints.
                </p>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <ProcessSteps steps={AS_IS_STEPS} orientation="vertical" variant="manual" />
                </div>
              </div>
              <div className="space-y-6">
                 <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                   <h4 className="text-red-800 font-bold text-lg mb-4 flex items-center gap-2">
                     <AlertTriangle size={20}/> Major Pain Points
                   </h4>
                   <ul className="space-y-4">
                     {PAIN_POINTS.flatMap(p => p.points).slice(0, 5).map((point, i) => (
                       <li key={i} className="flex items-start gap-3 text-slate-700">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></div>
                         {point}
                       </li>
                     ))}
                   </ul>
                 </div>
                 <BPMNPlaceholder label="Detailed AS-IS BPMN Diagram" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Digital Transformation (TO-BE) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500 rounded-full blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-20 fade-in-up">
              <span className="text-teal-400 font-bold tracking-wider uppercase text-sm">The Solution</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Fully Automated Ecosystem</h2>
              <p className="text-teal-200 max-w-2xl mx-auto text-lg">
                Reimagining the patient experience with speed, accuracy, and convenience at the core.
              </p>
           </div>

           {/* Innovation Grid */}
           <div className="grid md:grid-cols-5 gap-6 mb-24">
              {[
                { title: "Smart Booking", icon: Calendar, desc: "24/7 Web Portal" },
                { title: "Auto-Verification", icon: Shield, desc: "Instant Eligibility" },
                { title: "Digital Payments", icon: DollarSign, desc: "Secure Gateway" },
                { title: "E-Token", icon: Smartphone, desc: "Live Queue Status" },
                { title: "Auto-Notification", icon: CheckCircle, desc: "SMS & Email Updates" },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors group fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
                   <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                     <item.icon size={24} />
                   </div>
                   <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                   <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
           </div>

           {/* Phase 1 vs Phase 2 */}
           <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 fade-in-up delay-200">
                 <div className="flex items-center justify-between mb-8">
                   <h3 className="text-2xl font-bold">Phase 1: Process Optimization</h3>
                   <span className="bg-teal-500/20 text-teal-300 text-xs px-3 py-1 rounded-full font-medium">Quick Win</span>
                 </div>
                 <ul className="space-y-6">
                   <li className="flex gap-4">
                     <div className="p-2 bg-teal-500/10 rounded text-teal-400 h-fit"><FileText size={20}/></div>
                     <div>
                       <h4 className="font-semibold text-white">Structured Forms</h4>
                       <p className="text-sm text-slate-400 mt-1">Standardized inputs to reduce ambiguity.</p>
                     </div>
                   </li>
                   <li className="flex gap-4">
                     <div className="p-2 bg-teal-500/10 rounded text-teal-400 h-fit"><Users size={20}/></div>
                     <div>
                       <h4 className="font-semibold text-white">Visual Triage</h4>
                       <p className="text-sm text-slate-400 mt-1">Single-desk fee collection and token system.</p>
                     </div>
                   </li>
                 </ul>
                 <div className="mt-8 pt-8 border-t border-slate-700">
                   <BPMNPlaceholder label="TO-BE Manual BPMN" />
                 </div>
              </div>

              <div className="bg-gradient-to-b from-teal-900/50 to-slate-900 p-8 rounded-3xl border border-teal-500/30 fade-in-up delay-300 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-32 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                 <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold text-white">Phase 2: Full Automation</h3>
                      <span className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg shadow-teal-500/50">Target State</span>
                    </div>
                    
                    <p className="text-teal-100 mb-8">
                      The complete transition to a web-based platform that handles the entire patient lifecycle autonomously.
                    </p>

                    <div className="space-y-3 mb-8">
                      {["Patient logs in via Web App", "System checks real-time slot availability", "Fees calculated & paid online", "Digital Token generated instantly"].map((step, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-teal-100 bg-teal-900/40 p-3 rounded-lg border border-teal-500/20">
                          <CheckCircle size={16} className="text-teal-400" />
                          {step}
                        </div>
                      ))}
                    </div>

                    <Link to="/booking">
                      <Button className="w-full bg-teal-500 hover:bg-teal-400 text-white border-0 shadow-lg shadow-teal-500/25 py-4">
                        Experience the Prototype <MousePointer2 size={18} className="ml-2" />
                      </Button>
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Strategic Value (Benefits) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="fade-in-up">
                <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">The Impact</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Measurable Results</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Implementing this system doesn't just look good—it drastically improves operational efficiency and patient satisfaction metrics.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                   <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="text-3xl font-bold text-teal-600 mb-1">83%</div>
                      <div className="text-sm text-slate-600 font-medium">Wait Time Reduction</div>
                   </div>
                   <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                      <div className="text-sm text-slate-600 font-medium">Data Accuracy</div>
                   </div>
                   <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                      <div className="text-sm text-slate-600 font-medium">System Availability</div>
                   </div>
                   <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="text-3xl font-bold text-orange-600 mb-1">Zero</div>
                      <div className="text-sm text-slate-600 font-medium">Paper Waste</div>
                   </div>
                </div>
             </div>
             
             <div className="relative fade-in-up delay-200">
                <div className="absolute inset-0 bg-teal-600/5 transform rotate-3 rounded-3xl"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                   <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
                     <BarChart3 className="text-teal-500" /> Performance Analytics
                   </h3>
                   <BenefitsChart />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to see the difference?</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Explore the interactive booking prototype to understand the seamless flow of the TO-BE automated system.
            </p>
            <Link to="/booking">
              <Button size="lg" className="px-10">
                Launch Application Demo
              </Button>
            </Link>
         </div>
      </section>

    </div>
  );
};