import { useState, useEffect } from 'react';

export function ColumnCard({ 
  columnName, 
  serials, 
  isActive, 
  onSetActive, 
  onCopy, 
  onClear, 
  onRemove,
  highlightedSerial 
}) {
  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    if (highlightedSerial) {
      setHighlighted(highlightedSerial);
      const timer = setTimeout(() => setHighlighted(null), 2600);
      return () => clearTimeout(timer);
    }
  }, [highlightedSerial]);

  const handleRemove = (index) => {
    onRemove(columnName, index);
  };

  return (
    <div className={`column-card ${isActive ? 'active' : ''}`}>
      <h2>
        <span>
          {columnName} <span className="count">{serials.length}</span>
        </span>
        <span className="col-controls">
          <button 
            className="btn small" 
            onClick={() => onSetActive(columnName)}
          >
            Seleccionar
          </button>
          <button 
            className="btn small" 
            onClick={() => onCopy(columnName)}
          >
            Copiar
          </button>
          <button 
            className="btn small" 
            onClick={() => onClear(columnName)}
          >
            Limpiar
          </button>
        </span>
      </h2>
      <ul className="serial-list" aria-live="polite">
        {serials.length === 0 ? (
          <li className="empty-state">No hay seriales en esta columna</li>
        ) : (
          serials.map((serial, idx) => {
            const isHighlighted = highlighted === serial;
            const isSuccess = idx === serials.length - 1 && !isHighlighted;
            
            return (
              <li
                key={`${serial}-${idx}`}
                className={`serial-item ${isHighlighted ? 'dup' : ''} ${isSuccess ? 'success' : ''}`}
                data-value={serial}
              >
                <span>{serial}</span>
                <button
                  className="btn small"
                  onClick={() => handleRemove(idx)}
                  title="Eliminar este serial"
                >
                  x
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

