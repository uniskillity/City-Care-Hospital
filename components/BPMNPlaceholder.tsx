import React from 'react';

interface BPMNPlaceholderProps {
  label: string;
}

export const BPMNPlaceholder: React.FC<BPMNPlaceholderProps> = ({ label }) => {
  return (
    <div style={{ 
      width: '100%', 
      height: '16rem', 
      border: '2px dashed var(--border)', 
      borderRadius: '0.75rem', 
      background: 'var(--bg-body)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }}>
      <div style={{ 
        width: '6rem', 
        height: '4rem', 
        background: 'white', 
        border: '1px solid var(--border)', 
        borderRadius: '0.25rem', 
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
         <span style={{ fontSize: '0.75rem', fontFamily: 'monospace' }}>Process</span>
      </div>
      <p style={{ fontWeight: 500 }}>BPMN Diagram Placeholder</p>
      <p className="text-sm" style={{ marginTop: '0.25rem', color: 'var(--text-light)' }}>{label}</p>
    </div>
  );
};