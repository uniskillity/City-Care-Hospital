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
    <div className="section bg-body" style={{ minHeight: '100vh', padding: '3rem 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Navigation & Title */}
        <div className="flex justify-between items-center no-print" style={{ marginBottom: '2rem' }}>
           <div>
             <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
               <ArrowLeft size={16} style={{ marginRight: '0.25rem' }}/> Return to Overview
             </Link>
             <h1 className="text-3xl font-bold">Book Appointment</h1>
           </div>
           <div className="badge badge-teal">Live Prototype</div>
        </div>

        <div className="grid grid-3" style={{ gridTemplateColumns: '1fr 3fr' }}>
           {/* Sidebar / Stepper */}
           <div className="no-print">
              <div className="card" style={{ padding: '1.5rem', position: 'sticky', top: '6rem' }}>
                 <div className="stepper">
                    <div className="stepper-line"></div>
                    {STEPS.map((step, idx) => (
                      <div key={idx} className={`step-item ${idx > currentStep ? 'inactive' : ''} ${idx === currentStep ? 'step-active' : ''} ${idx < currentStep ? 'step-completed' : ''}`}>
                        <div className="step-circle">
                          {idx < currentStep ? <CheckCircle size={14} /> : idx + 1}
                        </div>
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: idx === currentStep ? 'var(--primary)' : 'inherit' }}>
                          {step}
                        </span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Main Form Area */}
           <div className="col-span-2" style={{ gridColumn: 'span 2' }}>
             <Card noPadding>
               <div className="p-8" style={{ padding: '2rem' }}>
                {/* Step 1: Patient Details */}
                {currentStep === 0 && (
                  <div className="fade-in">
                    <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                      <div className="form-group">
                        <label className="label">Patient Name</label>
                        <div className="input-icon-wrap">
                          <User className="input-icon" size={18} />
                          <input
                            type="text"
                            name="patientName"
                            value={formData.patientName}
                            onChange={handleInputChange}
                            className="input input-with-icon"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label">Contact Number</label>
                        <div className="input-icon-wrap">
                          <Phone className="input-icon" size={18} />
                          <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                            className="input input-with-icon"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label">Specialist</label>
                        <div className="input-icon-wrap">
                          <select
                            name="doctorId"
                            value={formData.doctorId}
                            onChange={handleInputChange}
                            className="select"
                            style={{ paddingLeft: '1rem' }}
                          >
                            <option value="">Select Department / Doctor</option>
                            {DOCTORS.map(doc => (
                              <option key={doc.id} value={doc.id} disabled={!doc.available}>
                                {doc.name} - {doc.specialty} {!doc.available && '(Unavailable)'}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label">Preferred Date</label>
                        <div className="input-icon-wrap">
                          <Calendar className="input-icon" size={18} />
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="input input-with-icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="label">Reason for Visit</label>
                      <div className="input-icon-wrap">
                        <FileText className="input-icon" size={18} style={{ top: '1.5rem' }} />
                        <textarea
                          name="reason"
                          value={formData.reason}
                          onChange={handleInputChange}
                          rows={3}
                          className="textarea input-with-icon"
                          placeholder="Please describe symptoms or purpose of appointment..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex justify-end" style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                      <Button onClick={handleNext} disabled={!isFormValid} size="lg">
                        Continue to Payment <ArrowLeft style={{ marginLeft: '0.5rem', transform: 'rotate(180deg)' }} size={18}/>
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Confirmation & Payment */}
                {currentStep === 1 && (
                  <div className="fade-in" style={{ maxWidth: '400px', margin: '0 auto' }}>
                    <div className="text-center" style={{ marginBottom: '2rem' }}>
                       <h3 className="text-2xl font-bold">Review & Pay</h3>
                       <p className="text-muted">Please verify your appointment details.</p>
                    </div>
                    
                    <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem', borderTop: '4px solid var(--primary)' }}>
                       <div className="flex justify-between items-center" style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--bg-body)', marginBottom: '1rem' }}>
                         <div>
                           <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Doctor</p>
                           <p style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>{selectedDoctor?.name}</p>
                           <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{selectedDoctor?.specialty}</p>
                         </div>
                         <div style={{ padding: '0.75rem', background: 'var(--primary-light)', borderRadius: '50%', color: 'var(--primary)' }}>
                           <User size={20} />
                         </div>
                       </div>
                       
                       <div className="flex flex-col gap-3">
                         <div className="flex justify-between text-sm">
                           <span className="text-muted">Patient</span>
                           <span className="font-medium">{formData.patientName}</span>
                         </div>
                         <div className="flex justify-between text-sm">
                           <span className="text-muted">Date</span>
                           <span className="font-medium">{formData.date}</span>
                         </div>
                         <div className="flex justify-between text-sm">
                           <span className="text-muted">Time Slot</span>
                           <span className="font-medium">10:30 AM (Estimated)</span>
                         </div>
                       </div>

                       <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--bg-body)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <span className="font-bold">Total Due</span>
                         <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)' }}>${FEE}</span>
                       </div>
                    </div>

                    <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                       <div style={{ background: 'white', padding: '0.5rem', borderRadius: '0.25rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                          <CreditCard color="#334155" size={24} />
                       </div>
                       <div style={{ flex: 1 }}>
                          <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>Credit / Debit Card</p>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Secure simulated transaction</p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(0)} style={{ flex: 1 }}>
                        Back
                      </Button>
                      <Button onClick={handleNext} style={{ flex: 2 }} disabled={loading} size="lg">
                        {loading ? (
                          <>Processing <Loader2 className="animate-spin" style={{ marginLeft: '0.5rem' }} size={18}/></>
                        ) : (
                          <>Confirm Payment</>
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Success Token */}
                {currentStep === 2 && (
                   <div className="fade-in flex flex-col items-center justify-center text-center">
                      <div className="no-print" style={{ width: '5rem', height: '5rem', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)', marginBottom: '1.5rem' }}>
                         <CheckCircle size={40} />
                      </div>
                      <div className="no-print" style={{ marginBottom: '2rem' }}>
                         <h2 className="text-2xl font-bold" style={{ marginBottom: '0.5rem' }}>Payment Successful!</h2>
                         <p className="text-muted">Your appointment is confirmed. Here is your digital ticket.</p>
                      </div>

                      {/* Digital Token Slip - PRINTABLE */}
                      <div id="printable-ticket" style={{ 
                          background: 'white', 
                          border: '1px solid var(--border)', 
                          borderRadius: '1rem', 
                          width: '100%', 
                          maxWidth: '350px', 
                          boxShadow: 'var(--shadow-lg)', 
                          overflow: 'hidden', 
                          marginBottom: '2rem' 
                      }}>
                         <div style={{ background: 'var(--bg-dark)', color: 'white', padding: '1.5rem', position: 'relative' }}>
                             <div className="flex justify-between items-start">
                                <div className="text-left-md">
                                  <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>City Care Hospital</h3>
                                  <p style={{ fontSize: '0.75rem', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Outpatient Token</p>
                                </div>
                                <div>
                                   <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.25rem', borderRadius: '0.25rem' }}>
                                     <Activity color="#2dd4bf" />
                                   </div>
                                </div>
                             </div>
                         </div>
                         
                         <div style={{ padding: '1.5rem' }}>
                            <div className="text-center" style={{ marginBottom: '1.5rem' }}>
                               <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Queue Number</p>
                               <p style={{ fontSize: '3rem', fontFamily: 'monospace', fontWeight: 700, lineHeight: 1 }}>A-104</p>
                            </div>

                            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
                                <div className="flex justify-between items-center">
                                   <div className="flex items-center gap-3">
                                      <User size={16} color="var(--text-light)"/>
                                      <span style={{ fontWeight: 500 }}>{formData.patientName}</span>
                                   </div>
                                </div>
                                <div className="flex justify-between items-center">
                                   <div className="flex items-center gap-3">
                                      <Calendar size={16} color="var(--text-light)"/>
                                      <span style={{ fontWeight: 500 }}>{formData.date}</span>
                                   </div>
                                </div>
                                <div className="flex justify-between items-center">
                                   <div className="flex items-center gap-3">
                                      <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)' }}><Check size={10}/></div>
                                      <span style={{ fontWeight: 500, color: 'var(--success)' }}>Paid ${FEE}</span>
                                   </div>
                                </div>
                            </div>
                            
                            <div className="text-center" style={{ marginTop: '2rem' }}>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Please present this digital slip at Room 302.</p>
                            </div>
                         </div>
                      </div>

                      <div className="flex gap-4 no-print">
                         <Button variant="outline" onClick={() => window.print()}>
                           <Printer size={16} style={{ marginRight: '0.5rem' }}/> Print Ticket
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