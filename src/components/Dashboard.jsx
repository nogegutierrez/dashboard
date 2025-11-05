import { useState, useEffect, useCallback } from 'react';
import { ColumnCard } from './ColumnCard';
import { ScannerInput } from './ScannerInput';
import { Stats } from './Stats';
import { Toast } from './Toast';
import { useScanner } from '../hooks/useScanner';
import { useToast } from '../hooks/useToast';
import { saveToStorage, loadFromStorage } from '../utils/storage';
import { beep } from '../utils/beep';
import '../styles/App.css';

const COLUMNS = ['ONT', 'EEROS', 'STB', 'STICKS'];

export function Dashboard() {
  const [data, setData] = useState(() => {
    const saved = loadFromStorage();
    return saved || { ONT: [], EEROS: [], STB: [], STICKS: [] };
  });
  const [activeColumn, setActiveColumn] = useState('ONT');
  const [globalSet, setGlobalSet] = useState(() => {
    const saved = loadFromStorage();
    const set = new Set();
    if (saved) {
      COLUMNS.forEach(col => {
        if (saved[col]) {
          saved[col].forEach(v => set.add(v));
        }
      });
    }
    return set;
  });
  const [highlightedSerial, setHighlightedSerial] = useState(null);
  const [newlyAddedSerial, setNewlyAddedSerial] = useState(null);
  const { toasts, showToast, removeToast } = useToast();

  const { inputRef, focusInput } = useScanner(activeColumn, handleScan);

  function handleScan(serialRaw) {
    const serial = serialRaw.trim();
    if (!serial) return;

    if (globalSet.has(serial)) {
      showToast('Duplicado detectado: ' + serial, 'danger');
      beep();
      setHighlightedSerial(serial);
      return;
    }

    const newData = {
      ...data,
      [activeColumn]: [...data[activeColumn], serial]
    };
    
    setData(newData);
    setGlobalSet(prev => new Set([...prev, serial]));
    saveToStorage(newData);
    
    showToast('Agregado a ' + activeColumn + ': ' + serial, 'success');
    setNewlyAddedSerial(serial);
    setTimeout(() => setNewlyAddedSerial(null), 1000);
  }

  const handleSetActive = useCallback((col) => {
    setActiveColumn(col);
    focusInput();
    showToast('Columna activa: ' + col);
  }, [focusInput, showToast]);

  const handleCopy = useCallback((col) => {
    const arr = data[col];
    if (!arr.length) {
      showToast('Columna vacía.');
      return;
    }

    const text = arr.join('\n');
    navigator.clipboard.writeText(text).then(() => {
      showToast('Copiados ' + arr.length + ' seriales de ' + col, 'success');
    }).catch(err => {
      showToast('Error copiando: ' + (err?.message || err), 'danger');
    });
  }, [data, showToast]);

  const handleClear = useCallback((col) => {
    if (!confirm('Limpiar columna ' + col + ' ?')) return;
    
    const newData = { ...data };
    data[col].forEach(v => globalSet.delete(v));
    newData[col] = [];
    
    setData(newData);
    setGlobalSet(new Set(globalSet));
    saveToStorage(newData);
    showToast('Columna ' + col + ' limpiada');
  }, [data, globalSet, showToast]);

  const handleRemove = useCallback((col, idx) => {
    const v = data[col][idx];
    if (typeof v === 'undefined') return;
    
    const newData = { ...data };
    newData[col] = newData[col].filter((_, i) => i !== idx);
    
    setData(newData);
    setGlobalSet(prev => {
      const newSet = new Set(prev);
      newSet.delete(v);
      return newSet;
    });
    saveToStorage(newData);
    showToast('Serial eliminado: ' + v);
  }, [data, showToast]);

  const handleExportCSV = useCallback(() => {
    const rows = [['column', 'serial']];
    COLUMNS.forEach(col => {
      data[col].forEach(s => rows.push([col, s]));
    });

    if (rows.length === 1) {
      showToast('No hay datos para exportar');
      return;
    }

    const csv = rows.map(r => 
      r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
    ).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'seriales_export_' + new Date().toISOString().slice(0, 10) + '.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    showToast('CSV exportado correctamente', 'success');
  }, [data, showToast]);

  const handleClearAll = useCallback(() => {
    if (!confirm('Limpiar todas las columnas?')) return;
    
    const newData = { ONT: [], EEROS: [], STB: [], STICKS: [] };
    setData(newData);
    setGlobalSet(new Set());
    saveToStorage(newData);
    showToast('Todas las columnas limpiadas');
  }, [showToast]);

  const totalCount = COLUMNS.reduce((sum, col) => sum + data[col].length, 0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const colIndex = parseInt(e.key) - 1;
        if (colIndex < COLUMNS.length) {
          handleSetActive(COLUMNS[colIndex]);
        }
      }

      if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        handleExportCSV();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleSetActive, handleExportCSV]);

  useEffect(() => {
    setTimeout(() => {
      focusInput();
      showToast('Aplicación lista para escanear. Columna activa: ' + activeColumn);
    }, 300);
  }, []);

  return (
    <div className="app">
      <div className="dashboard-header">
        <h1>Scanner Serial Manager — Dashboard</h1>
        <div className="dashboard-top">
          <div className="note">
            Scanner USB actúa como teclado (envía ENTER al final). Selecciona la columna activa y escanea.
          </div>
          <div className="searchline">
            <span className="status-indicator status-active"></span>
            <label className="hint">Escáner activo:</label>
            <select id="scannerMode" title="Modo de operación">
              <option value="kbd">Modo teclado (HID)</option>
              <option value="webserial">Modo WebSerial (avanzado)</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <div className="dashboard-controls">
          <button className="btn small" onClick={focusInput}>
            Forzar foco al scanner
          </button>
          <button className="btn small" onClick={handleExportCSV}>
            Exportar CSV
          </button>
          <button className="btn small" onClick={handleClearAll}>
            Limpiar todo
          </button>
          <div className="export-label">
            Columna activa: <strong>{activeColumn}</strong>
          </div>
        </div>
        <Stats totalCount={totalCount} uniqueCount={globalSet.size} />
      </div>

      <div className="dashboard-grid">
        {COLUMNS.map(col => (
          <ColumnCard
            key={col}
            columnName={col}
            serials={data[col]}
            isActive={col === activeColumn}
            onSetActive={handleSetActive}
            onCopy={handleCopy}
            onClear={handleClear}
            onRemove={handleRemove}
            highlightedSerial={highlightedSerial}
          />
        ))}
      </div>

      <ScannerInput inputRef={inputRef} />

      <footer className="dashboard-footer">
        Recomendación: configura tu scanner para que envíe <code>Enter</code> al final del escaneo. 
        Si no envía Enter, la app espera 700ms sin actividad para finalizar el valor.
      </footer>

      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  );
}

