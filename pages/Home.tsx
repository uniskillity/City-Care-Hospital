import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Activity, Clock, FileText, AlertTriangle, 
  Users, DollarSign, Smartphone, CheckCircle,
  Shield, MousePointer2, ChevronDown, 
  Zap, Calendar, BarChart3
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { BPMNPlaceholder } from '../components/BPMNPlaceholder';
import { ProcessSteps } from '../components/ProcessSteps';
import { AS_IS_STEPS, PAIN_POINTS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BenefitsChart = () => {
  const data = [
    { name: 'Wait Time (min)', manual: 60, automated: 10 },
    { name: 'Errors (%)', manual: 25, automated: 2 },
    { name: 'Cost (Idx)', manual: 100, automated: 30 },
  ];

  return (
    <div style={{ height: '18rem', width: '100%' }}>
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
      <div className="flex justify-center gap-8" style={{ marginTop: '1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
        <div className="flex items-center gap-2">
            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#94a3b8' }}></div>
            <span className="text-muted">Manual Process</span>
        </div>
        <div className="flex items-center gap-2">
            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#0d9488' }}></div>
            <span className="text-primary">Automated System</span>
        </div>
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="bg-white">
      
      {/* 1. Hero Section */}
      <section className="section-hero">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top right, #0f172a, rgba(13, 148, 136, 0.8), #0f172a)' }}></div>
        
        <div className="container relative fade-in" style={{ textAlign: 'center', zIndex: 10 }}>
           <div style={{ 
             display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', 
             borderRadius: '9999px', background: 'rgba(13, 148, 136, 0.2)', border: '1px solid rgba(13, 148, 136, 0.3)',
             color: '#ccfbf1', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem'
           }}>
              <Zap size={16} fill="#facc15" color="#facc15" />
              <span>Next Gen Healthcare Operations</span>
           </div>
           
           <h1 className="text-4xl" style={{ fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
             Transforming <span style={{ color: '#2dd4bf' }}>Patient Care</span> <br/>
             Through Innovation.
           </h1>
           
           <p className="text-xl" style={{ color: '#cbd5e1', marginBottom: '3rem', maxWidth: '48rem', marginInline: 'auto' }}>
             Moving from manual bottlenecks to a seamless, automated digital ecosystem. 
             Experience the future of City Care Hospital.
           </p>

           <div className="flex flex-col gap-4 justify-center md-flex" style={{ flexDirection: 'row' }}>
             <Link to="/booking">
               <Button size="lg" style={{ minWidth: '200px' }}>
                 Try Live Demo
                 <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
               </Button>
             </Link>
             <Button 
               variant="outline" 
               size="lg" 
               style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', minWidth: '200px' }}
               onClick={() => document.getElementById('reality')?.scrollIntoView({behavior: 'smooth'})}
             >
               Explore the Journey
             </Button>
           </div>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.7 }}>
          <ChevronDown size={32} />
        </div>
      </section>

      {/* 2. The Current Reality */}
      <section id="reality" className="section bg-body">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span style={{ color: 'var(--danger)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>The Challenge</span>
            <h2 className="text-3xl font-bold" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Why Change is Necessary</h2>
            <p className="text-lg text-muted" style={{ maxWidth: '42rem', margin: '0 auto' }}>
              The traditional manual process is failing our patients and staff.
            </p>
          </div>

          <div className="grid grid-3" style={{ marginBottom: '5rem' }}>
             <Card>
                <div style={{ width: '3.5rem', height: '3.5rem', background: '#fef2f2', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--danger)' }}>
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-bold" style={{ marginBottom: '0.75rem' }}>Critical Delays</h3>
                <p className="text-muted">
                  Patients wait an average of <span style={{ fontWeight: 'bold', color: 'var(--danger)' }}>45 minutes</span> just to register, causing waiting room congestion.
                </p>
             </Card>
             <Card>
                <div style={{ width: '3.5rem', height: '3.5rem', background: '#fff7ed', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#f97316' }}>
                  <FileText size={28} />
                </div>
                <h3 className="text-xl font-bold" style={{ marginBottom: '0.75rem' }}>Paperwork Overload</h3>
                <p className="text-muted">
                  Redundant data entry across multiple physical forms leads to a <span style={{ fontWeight: 'bold', color: '#f97316' }}>12% error rate</span> in patient records.
                </p>
             </Card>
             <Card>
                <div style={{ width: '3.5rem', height: '3.5rem', background: '#f1f5f9', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#475569' }}>
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold" style={{ marginBottom: '0.75rem' }}>Resource Drain</h3>
                <p className="text-muted">
                  Staff spend <span style={{ fontWeight: 'bold', color: '#334155' }}>60% of their time</span> on administrative tasks instead of patient care.
                </p>
             </Card>
          </div>

          {/* AS-IS Visualization */}
          <div className="card" style={{ padding: '3rem' }}>
            <div className="grid grid-2">
              <div>
                <h3 className="text-2xl font-bold" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>1</span>
                  The Manual Workflow (AS-IS)
                </h3>
                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                  A visual representation of the current fragmented journey a patient must endure.
                </p>
                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                  <ProcessSteps steps={AS_IS_STEPS} orientation="vertical" variant="manual" />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                 <div style={{ background: '#fef2f2', padding: '2rem', borderRadius: '1rem', border: '1px solid #fee2e2' }}>
                   <h4 style={{ color: '#991b1b', fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     <AlertTriangle size={20}/> Major Pain Points
                   </h4>
                   <ul className="flex flex-col gap-3">
                     {PAIN_POINTS.flatMap(p => p.points).slice(0, 5).map((point, i) => (
                       <li key={i} className="flex items-start gap-3" style={{ color: '#b91c1c' }}>
                         <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f87171', marginTop: '0.5rem', flexShrink: 0 }}></div>
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

      {/* 3. The Digital Transformation */}
      <section className="section section-dark relative">
        <div className="container relative" style={{ zIndex: 10 }}>
           <div className="text-center" style={{ marginBottom: '5rem' }}>
              <span style={{ color: '#2dd4bf', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>The Solution</span>
              <h2 className="text-4xl font-bold" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Fully Automated Ecosystem</h2>
              <p style={{ color: '#99f6e4', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
                Reimagining the patient experience with speed, accuracy, and convenience at the core.
              </p>
           </div>

           {/* Innovation Grid */}
           <div className="grid grid-5" style={{ marginBottom: '6rem' }}>
              {[
                { title: "Smart Booking", icon: Calendar, desc: "24/7 Web Portal" },
                { title: "Auto-Verification", icon: Shield, desc: "Instant Eligibility" },
                { title: "Digital Payments", icon: DollarSign, desc: "Secure Gateway" },
                { title: "E-Token", icon: Smartphone, desc: "Live Queue Status" },
                { title: "Auto-Notification", icon: CheckCircle, desc: "SMS & Email Updates" },
              ].map((item, idx) => (
                <div key={idx} style={{ 
                    background: 'rgba(30, 41, 59, 0.5)', 
                    border: '1px solid #334155', 
                    padding: '1.5rem', 
                    borderRadius: '1rem'
                }}>
                   <div style={{ 
                       width: '3rem', height: '3rem', background: 'rgba(13, 148, 136, 0.1)', 
                       borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                       color: '#2dd4bf', marginBottom: '1rem' 
                   }}>
                     <item.icon size={24} />
                   </div>
                   <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.25rem' }}>{item.title}</h3>
                   <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{item.desc}</p>
                </div>
              ))}
           </div>

           {/* Phase 1 vs Phase 2 */}
           <div className="grid grid-2">
              <div style={{ background: 'rgba(30, 41, 59, 0.8)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid #334155' }}>
                 <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                   <h3 className="text-2xl font-bold">Phase 1: Optimization</h3>
                   <span style={{ background: 'rgba(20, 184, 166, 0.2)', color: '#5eead4', fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '999px', fontWeight: 600 }}>Quick Win</span>
                 </div>
                 <ul className="flex flex-col gap-6">
                   <li className="flex gap-4">
                     <div style={{ padding: '0.5rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '0.25rem', color: '#2dd4bf' }}><FileText size={20}/></div>
                     <div>
                       <h4 style={{ fontWeight: 600 }}>Structured Forms</h4>
                       <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Standardized inputs to reduce ambiguity.</p>
                     </div>
                   </li>
                 </ul>
                 <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #334155' }}>
                   <BPMNPlaceholder label="TO-BE Manual BPMN" />
                 </div>
              </div>

              <div style={{ 
                  background: 'linear-gradient(to bottom, rgba(13, 148, 136, 0.2), rgba(15, 23, 42, 0.9))', 
                  padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(13, 148, 136, 0.3)' 
              }}>
                 <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                    <h3 className="text-2xl font-bold">Phase 2: Automation</h3>
                    <span style={{ background: 'var(--primary)', color: 'white', fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '999px', fontWeight: 600 }}>Target</span>
                 </div>
                 
                 <p style={{ color: '#ccfbf1', marginBottom: '2rem' }}>
                   The complete transition to a web-based platform that handles the entire patient lifecycle autonomously.
                 </p>

                 <div className="flex flex-col gap-3" style={{ marginBottom: '2rem' }}>
                   {["Patient logs in via Web App", "System checks real-time slot availability", "Fees calculated & paid online", "Digital Token generated instantly"].map((step, i) => (
                     <div key={i} className="flex items-center gap-3" style={{ fontSize: '0.875rem', color: '#ccfbf1', background: 'rgba(13, 148, 136, 0.1)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                       <CheckCircle size={16} color="#2dd4bf" />
                       {step}
                     </div>
                   ))}
                 </div>

                 <Link to="/booking">
                   <Button className="w-full btn-lg" style={{ background: '#0d9488' }}>
                     Experience the Prototype <MousePointer2 size={18} style={{ marginLeft: '0.5rem' }} />
                   </Button>
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Strategic Value */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2 items-center">
             <div>
                <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>The Impact</span>
                <h2 className="text-4xl font-bold" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>Measurable Results</h2>
                <p className="text-lg text-muted" style={{ marginBottom: '2rem' }}>
                  Implementing this system doesn't just look good—it drastically improves operational efficiency and patient satisfaction metrics.
                </p>
                
                <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                   <div style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                      <div className="text-3xl font-bold text-primary" style={{ marginBottom: '0.25rem' }}>83%</div>
                      <div className="text-sm font-medium text-muted">Wait Time Reduction</div>
                   </div>
                   <div style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                      <div className="text-3xl font-bold" style={{ marginBottom: '0.25rem', color: 'var(--success)' }}>100%</div>
                      <div className="text-sm font-medium text-muted">Data Accuracy</div>
                   </div>
                </div>
             </div>
             
             <div>
                <div className="card" style={{ padding: '2rem' }}>
                   <h3 className="font-bold text-lg" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     <BarChart3 style={{ color: 'var(--primary)' }} /> Performance Analytics
                   </h3>
                   <BenefitsChart />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="text-3xl font-bold" style={{ marginBottom: '1.5rem' }}>Ready to see the difference?</h2>
            <p className="text-muted" style={{ marginBottom: '2rem', maxWidth: '36rem', marginInline: 'auto' }}>
              Explore the interactive booking prototype to understand the seamless flow of the TO-BE automated system.
            </p>
            <Link to="/booking">
              <Button size="lg" style={{ minWidth: '240px' }}>
                Launch Application Demo
              </Button>
            </Link>
         </div>
      </section>

    </div>
  );
};