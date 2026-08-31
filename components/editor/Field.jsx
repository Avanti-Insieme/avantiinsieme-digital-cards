import { C } from '@/lib/theme';

const inputStyle = {
  fontFamily: 'inherit',
  fontSize: '15px',
  color: C.navy,
  padding: '12px 14px',
  border: '1px solid ' + C.lineStrong,
  borderRadius: '9px',
  background: C.white,
  minWidth: 0,
  width: '100%',
};

export const labelStyle = { fontSize: '13.5px', fontWeight: 600, color: C.bodyStrong };

export const legendStyle = {
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '1.4px',
  textTransform: 'uppercase',
  color: C.meta,
  padding: '0 0 16px',
};

export const fieldsetStyle = {
  border: 'none',
  margin: '0 0 28px',
  padding: '24px 0 0',
  borderTop: '1px solid ' + C.line,
};

export const rowStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
  gap: '16px',
};

export default function Field({ id, label, value, onChange, type = 'text', placeholder, help }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={help ? id + '-help' : undefined}
        style={inputStyle}
      />
      {help && (
        <span id={id + '-help'} style={{ fontSize: '12.5px', color: C.body }}>{help}</span>
      )}
    </div>
  );
}

export { inputStyle };
