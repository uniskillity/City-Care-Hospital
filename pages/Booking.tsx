import React, { useState } from 'react';
import { DOCTORS } from '../constants';
import { AppointmentData, Doctor } from '../types';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle, Printer, Calendar, ArrowLeft, Loader2, CreditCard, User, Phone, FileText, ChevronRight, Check, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const STEPS = ['Patient Details', 'Confirm & Pay', 'Digital Token'];

export const Booking: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<AppointmentData>({
    patientName: '',
    contactNumber: '',
    doctorId: '',
    reason: '',
    date: new Date().toISOString().split('T')[0]
  });
  
  const selectedDoctor = DOCTORS.find(d => d.id === formData.doctorId);
  const FEE = 500; // Fixed consultation fee

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCurrentStep(2);
      }, 2000);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const isFormValid = formData.patientName && formData.contactNumber && formData.doctorId && formData.reason;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 no-print">
           <div>
             <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors mb-2">
               <ArrowLeft size={16} className="mr-1"/> Return to Overview
             </Link>
             <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Book Appointment</h1>
           </div>
           <div className="mt-4 md:mt-0 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide self-start">
             Live Prototype
           </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
           {/* Sidebar / Stepper */}
           <div className="md:col-span-3 no-print">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-24">
                 <div className="space-y-6">
                    {STEPS.map((step, idx) => (
                      <div key={idx} className={`relative flex items-center gap-3 ${idx > currentStep ? 'opacity-40' : 'opacity-100'}`}>
                        {idx !== STEPS.length - 1 && (
                          <div className={`absolute left-4 top-8 w-0.5 h-6 -ml-px ${idx < currentStep ? 'bg-teal-600' : 'bg-slate-200'}`}></div>
                        )}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors
                          ${idx < currentStep ? 'bg-teal-600 border-teal-600 text-white' : 
                            idx === currentStep ? 'bg-white border-teal-600 text-teal-600' : 
                            'bg-white border-slate-300 text-slate-400'}`}>
                          {idx < currentStep ? <CheckCircle size={14} /> : idx + 1}
                        </div>
                        <span className={`text-sm font-medium ${idx === currentStep ? 'text-teal-700' : 'text-slate-600'}`}>
                          {step}
                        </span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Main Form Area */}
           <div className="md:col-span-9">
             <Card className="min-h-[500px]" noPadding>
               {/* Progress Bar (Mobile only essentially) */}
               <div className="h-1 bg-slate-100 w-full no-print">
                 <div className="h-full bg-teal-600 transition-all duration-500" style={{width: `${((currentStep + 1) / 3) * 100}%`}}></div>
               </div>

               <div className="p-8">
                {/* Step 1: Patient Details */}
                {currentStep === 0 && (
                  <div className="space-y-6 fade-in-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Patient Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500" size={18} />
                          <input
                            type="text"
                            name="patientName"
                            value={formData.patientName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent transition-all outline-none"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Contact Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500" size={18} />
                          <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent transition-all outline-none"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Specialist</label>
                        <div className="relative">
                          <select
                            name="doctorId"
                            value={formData.doctorId}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent transition-all outline-none appearance-none"
                          >
                            <option value="">Select Department / Doctor</option>
                            {DOCTORS.map(doc => (
                              <option key={doc.id} value={doc.id} disabled={!doc.available}>
                                {doc.name} - {doc.specialty} {!doc.available && '(Unavailable)'}
                              </option>
                            ))}
                          </select>
                          <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none" size={16} />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500" size={18} />
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent transition-all outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Reason for Visit</label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-4 text-slate-400 group-focus-within:text-teal-500" size={18} />
                        <textarea
                          name="reason"
                          value={formData.reason}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent transition-all outline-none"
                          placeholder="Please describe symptoms or purpose of appointment..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex justify-end pt-6 border-t border-slate-100">
                      <Button onClick={handleNext} disabled={!isFormValid} size="lg">
                        Continue to Payment <ArrowLeft className="ml-2 rotate-180" size={18}/>
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Confirmation & Payment */}
                {currentStep === 1 && (
                  <div className="max-w-md mx-auto space-y-8 fade-in-up">
                    <div className="text-center">
                       <h3 className="text-2xl font-bold text-slate-900">Review & Pay</h3>
                       <p className="text-slate-500">Please verify your appointment details.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 space-y-4 relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-400"></div>
                       <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                         <div>
                           <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Doctor</p>
                           <p className="font-bold text-slate-800 text-lg">{selectedDoctor?.name}</p>
                           <p className="text-sm text-slate-500">{selectedDoctor?.specialty}</p>
                         </div>
                         <div className="h-10 w-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                           <User size={20} />
                         </div>
                       </div>
                       
                       <div className="space-y-3">
                         <div className="flex justify-between text-sm">
                           <span className="text-slate-500">Patient</span>
                           <span className="font-medium text-slate-900">{formData.patientName}</span>
                         </div>
                         <div className="flex justify-between text-sm">
                           <span className="text-slate-500">Date</span>
                           <span className="font-medium text-slate-900">{formData.date}</span>
                         </div>
                         <div className="flex justify-between text-sm">
                           <span className="text-slate-500">Time Slot</span>
                           <span className="font-medium text-slate-900">10:30 AM (Estimated)</span>
                         </div>
                       </div>

                       <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                         <span className="font-bold text-slate-800">Total Due</span>
                         <span className="text-2xl font-bold text-green-600">${FEE}</span>
                       </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-4">
                       <div className="bg-white p-2 rounded shadow-sm">
                          <CreditCard className="text-slate-700" size={24} />
                       </div>
                       <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-900">Credit / Debit Card</p>
                          <p className="text-xs text-slate-500">Secure simulated transaction</p>
                       </div>
                       <div className="h-4 w-4 rounded-full border-2 border-teal-600 bg-teal-600"></div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(0)} className="flex-1">
                        Back
                      </Button>
                      <Button onClick={handleNext} className="flex-[2]" disabled={loading} size="lg">
                        {loading ? (
                          <>Processing <Loader2 className="ml-2 animate-spin" size={18}/></>
                        ) : (
                          <>Confirm Payment</>
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Success Token */}
                {currentStep === 2 && (
                   <div className="flex flex-col items-center justify-center text-center space-y-8 fade-in-up">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-xl shadow-green-100 no-print">
                         <CheckCircle size={40} />
                      </div>
                      <div className="no-print">
                         <h2 className="text-3xl font-bold text-slate-900 mb-2">Payment Successful!</h2>
                         <p className="text-slate-500">Your appointment is confirmed. Here is your digital ticket.</p>
                      </div>

                      {/* Digital Token Slip - PRINTABLE */}
                      <div id="printable-ticket" className="bg-white border border-slate-200 rounded-xl w-full max-w-sm shadow-2xl relative overflow-hidden transform transition-transform duration-300">
                         <div className="bg-slate-900 text-white p-6 relative overflow-hidden">
                             <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full"></div>
                             <div className="flex justify-between items-start">
                                <div className="text-left">
                                  <h3 className="font-bold text-lg text-white">City Care Hospital</h3>
                                  <p className="text-[10px] text-slate-300 uppercase tracking-wider">Outpatient Token</p>
                                </div>
                                <div className="text-right">
                                   {/* Simple SVG icon fallback for print compatibility if needed */}
                                   <div className="bg-teal-500/20 p-1 rounded">
                                     <Activity className="text-teal-400" />
                                   </div>
                                </div>
                             </div>
                         </div>
                         
                         <div className="p-6">
                            <div className="text-center mb-6">
                               <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Queue Number</p>
                               <p className="text-5xl font-mono font-bold text-slate-800 tracking-tighter">A-104</p>
                            </div>

                            <div className="space-y-4 text-sm border-t border-slate-100 pt-6">
                                <div className="flex justify-between items-center">
                                   <div className="flex items-center gap-3">
                                      <User size={16} className="text-slate-400"/>
                                      <span className="font-medium text-slate-700">{formData.patientName}</span>
                                   </div>
                                </div>
                                <div className="flex justify-between items-center">
                                   <div className="flex items-center gap-3">
                                      <Calendar size={16} className="text-slate-400"/>
                                      <span className="font-medium text-slate-700">{formData.date}</span>
                                   </div>
                                </div>
                                <div className="flex justify-between items-center">
                                   <div className="flex items-center gap-3">
                                      <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Check size={10}/></div>
                                      <span className="font-medium text-green-600">Paid ${FEE}</span>
                                   </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 text-center">
                                <p className="text-[10px] text-slate-400">Please present this digital slip at Room 302.</p>
                                <p className="text-[10px] text-slate-300 mt-1">Generated by City Care Automated System</p>
                            </div>
                         </div>

                         {/* Ticket Cutout Effect */}
                         <div className="absolute top-[88px] -left-3 w-6 h-6 bg-slate-50 rounded-full print:hidden"></div>
                         <div className="absolute top-[88px] -right-3 w-6 h-6 bg-slate-50 rounded-full print:hidden"></div>
                      </div>

                      <div className="flex gap-4 pt-4 no-print">
                         <Button variant="outline" onClick={() => window.print()}>
                           <Printer size={16} className="mr-2"/> Print Ticket
                         </Button>
                         <Button onClick={() => {
                           setCurrentStep(0);
                           setFormData({
                              patientName: '',
                              contactNumber: '',
                              doctorId: '',
                              reason: '',
                              date: new Date().toISOString().split('T')[0]
                            });
                         }}>
                           New Booking
                         </Button>
                      </div>
                   </div>
                )}
               </div>
             </Card>
           </div>
        </div>
      </div>
    </div>
  );
};
