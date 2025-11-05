import { useEffect, useRef, useCallback } from 'react';

const PAUSE_MS = 700;

export function useScanner(activeColumn, onScan) {
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const bufferRef = useRef('');

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const processValue = useCallback((value) => {
    const trimmed = value ? String(value).trim() : '';
    if (trimmed) {
      onScan(trimmed);
    }
    bufferRef.current = '';
  }, [onScan]);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const value = bufferRef.current || input.value;
        processValue(value);
        input.value = '';
        bufferRef.current = '';
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        return;
      }

      if (e.key === 'Backspace') {
        bufferRef.current = bufferRef.current.slice(0, -1);
        return;
      }

      if (e.ctrlKey || e.metaKey || e.key.length > 1) return;

      bufferRef.current += e.key;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        const value = bufferRef.current || input.value;
        if (value) processValue(value);
        input.value = '';
        bufferRef.current = '';
        timerRef.current = null;
      }, PAUSE_MS);
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData('text') || '';
      processValue(text);
    };

    input.addEventListener('keydown', handleKeyDown);
    input.addEventListener('paste', handlePaste);

    return () => {
      input.removeEventListener('keydown', handleKeyDown);
      input.removeEventListener('paste', handlePaste);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [processValue]);

  useEffect(() => {
    focusInput();
  }, [activeColumn, focusInput]);

  useEffect(() => {
    const handleClick = () => focusInput();
    const handleBlur = () => setTimeout(() => focusInput(), 50);
    
    window.addEventListener('click', handleClick);
    window.addEventListener('blur', handleBlur);
    
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('blur', handleBlur);
    };
  }, [focusInput]);

  return { inputRef, focusInput };
}

